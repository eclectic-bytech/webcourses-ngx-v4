<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Publisher;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $pub = ($request->input('publisher')) ? publisherIntId($request->input('publisher')) : false;

        return Course
            ::where('published', 1)
            ->where('private', 0)
            ->when(!$pub, function($query){
                return $query->where('hide_from_main_catalogue', 0);
            })
            ->when($pub, function($query, $pub) {
                return $query->where('publisher_id', $pub);
            })
            ->with(['publisher'])
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->when(auth()->check(), function($query) {
                return $query->with('userProgress');
            })
            ->get();
    }

    public function show($cid)
    {
        $course = Course
        ::where('courses.id', $cid)
        ->where('courses.published', 1)
        ->with(['publisher'])
        ->when(auth()->check(), function($query) {
            return $query->with('userProgress');
        })
        ->withCount('courseSyllabus as total_activities')
        ->withCount('participants as total_students')
        ->first();

        $course = json_decode($course);
        // If course is private, check if user has access before giving its details
        if ($course->private === 1) {
            return (isset($course->user_progress)) ? $course : null;
        }
        return $course;
    }
}
