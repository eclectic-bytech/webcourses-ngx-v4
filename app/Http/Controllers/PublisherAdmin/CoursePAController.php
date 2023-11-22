<?php

namespace App\Http\Controllers\PublisherAdmin;

use App\Services\PublisherServices\CoursePublisherService;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Publisher;

class CoursePAController extends Controller
{
    public function index()
    {
        return Course::where('publisher_id', resolve('pub_id'))
            ->withCount('courseSyllabus as total_activities')
            ->withCount('participants as total_students')
            ->withCount('accessCodes as access_codes')
            ->get();
    }

    public function show($cid)
    {
        return Course::where('publisher_id', resolve('pub_id'))
            ->withCount('participants as total_students')
            ->find($cid);
    }

    public function store(Request $request, CoursePublisherService $coursePubService)
    {
        $coursePubService->storeCourse($request->input());
        return $request->input();
    }

    public function update(Request $request, $cid)
    {
        $course = Course::withCount('participants as total_students')
            ->where('publisher_id', resolve('pub_id'))
            ->find($cid);

        if ($course) {
            $course->update(validateCourseData($request));
            return $course;
        }
    }

    public function destroy($cid)
    {
        $course = Course
            ::where('id', $cid)
            ->where('publisher_id', resolve('pub_id'))
            ->withCount('participants as total_students')
            ->first();

        if ($course && $course['total_students'] === 0) {
            return $course->delete();
        }
    }

}
