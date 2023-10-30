<?php

namespace App\Http\Controllers\PublisherAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Publisher;

class CoursePAController extends Controller
{
    public function index()
    {
        return Course
                ::where('publisher_id', resolve('pub_id'))
                ->withCount('courseSyllabus as total_activities')
                ->withCount('participants as total_students')
                ->withCount('accessCodes as access_codes')
                ->get();
    }

    public function course($cid) {
        return Course::where('publisher_id', resolve('pub_id'))
            ->withCount('participants as total_students')
            ->find($cid);
    }

    public function new_course(Request $request)
    {
        $input = $request->input();

        // $input = validate_course_data($input);
        $course = new Course();

        $course->active_bid = 1;
        $course->title = $input['title'];
        $course->publisher_id = resolve('pub_id');
        $course->published = 0;
        $course->private = $input['private'] ? 1 : 0;
        $course->hide_from_main_catalogue = 0;
        $course->completion_time = 1;
        $course->audience = $input['audience'];
        $course->short_desc = $input['short_desc'];
        $course->long_desc = $input['long_desc'];
        $course->objective = $input['objective'];
        $course->eval_type = $input['eval_type'];
        $course->price = $input['price'] * 100;
        $course->cover = 'default';

        $course->save();

        return $input;
    }

    public function edit_course(Request $request, $cid)
    {
        $course = Course::withCount('participants as total_students')
            ->where('publisher_id', resolve('pub_id'))
            ->find($cid);

        if ($course) {
            $course->update(validateCourseData($request));
            return $course;
        }

        abort(403, 'Unauthorised');
    }

    public function delete_course($cid)
    {
        $course = Course
            ::where('id', $cid)
            ->where('publisher_id', resolve('pub_id'))
            ->withCount('participants as total_students')
            ->first();

        if ($course && $course['total_students'] === 0) {
            return $course->delete();
        }
        abort(404);
    }

}
