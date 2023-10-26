<?php

namespace App\Http\Controllers\PublisherAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Publisher;

class CoursePAController extends Controller
{
    public function course($cid) {
        $uid = auth()->user()->id;
        $pub_id = Publisher::where('owner_uid', $uid)->first()->id;
        return Course::where('publisher_id', $pub_id)
            ->withCount('participants as total_students')
            ->find($cid);
    }

    public function new_course(Request $request)
    {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();
        $input = $request->input();

        $course = new Course();

        $course->active_bid = 1;
        $course->title = $input['title'];
        $course->publisher_id = $publisher['id'];
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

        $course->save();

        return $input;
    }

    public function edit_course(Request $request, $cid)
    {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();
        $course = Course::withCount('participants as total_students')->find($cid);

        if ( $course->publisher_id === $publisher->id ) {

            $validatedData = $request->validate([
                'title' => ['required', 'min:16', 'max:128'],
                'short_desc' => ['required', 'min:32', 'max:256'],
                'private' => 'boolean',
                'audience' => '',
                'long_desc' => '',
                'objective' => '',
                'eval_type' => 'in:"Online", "Instructor", "Online + Instructor", ""',
                'price' => ['required', 'integer', 'min:0', 'max:99999']
            ]);

            $course->update($validatedData);

            return $course;
        }

        abort(403, 'Unauthorised');
    }

    public function delete_course($cid)
    {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();

        $course = Course
            ::where('id', $cid)
            ->withCount('participants as total_students')
            ->first();

        if (
            $publisher['id'] === $course['publisher_id']
            && $course['total_students'] === 0
        ) {
            return Course::find($cid)->delete();
        }

        return 0;
    }

}
