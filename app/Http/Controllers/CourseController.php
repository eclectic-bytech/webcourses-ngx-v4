<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use DB;

class CourseController extends Controller
{
    /**
     * Display a listing of published and public courses.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($publisherId = false)
    {
        $userIsLoggedIn = auth()->check();
        $publisherId = ($publisherId) ? publisherIntId($publisherId) : false;

        return Course
            ::where('published', 1)
            ->where('private', 0)
            ->when(!$publisherId, function($query){
                return $query->where('hide_from_main_catalogue', 0);
            })
            ->when($publisherId, function($query, $publisherId) {
                return $query->where('publisher_id', $publisherId);
            })
            ->with(['publisher', 'theme'])
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->when($userIsLoggedIn, function($query) {
                return $query->with('UserProgress');
            })
            ->get();
    }


    public function indexUser($userId = false)
    {
        // Passed userId is intended for admin seeing what courses a user has access to.
        // Currently unused, added as documentation for future features.
        return Course
            ::where('courses.published', 1)
            ->whereHas('UserProgress')
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->with(['publisher', 'theme', 'UserProgress'])
            ->get();
    }


    public function course($cid) {
        // Course details page
        $course = Course
            ::where('courses.id', $cid)
            ->where('courses.published', 1)
            ->with(['publisher', 'theme', 'UserProgress'])
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

    public function chapterIndex($cid)
    {
        // tried fixing issue #160 here, but $cid needs to
        // be passed to syllabus relation in chapterIndex
        // this sort of passing is inadequate (applied in ActivityController:20):
        // https://stackoverflow.com/questions/36411826/laravel-eloquent-pass-variable-to-with-relationship-function
        $course = Course
            ::where('id', $cid)
            ->with('chapterIndex')
            ->first();

        $course = json_decode($course);
        return $course->chapter_index;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function show(CourseCatalogue $courseCatalogue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseCatalogue $courseCatalogue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CourseCatalogue $courseCatalogue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CourseCatalogue  $courseCatalogue
     * @return \Illuminate\Http\Response
     */
    public function destroy(CourseCatalogue $courseCatalogue)
    {
        //
    }
}
