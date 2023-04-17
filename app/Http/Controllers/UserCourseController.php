<?php

namespace App\Http\Controllers;

use App\Models\UserCourse;
use App\Models\UserAnswer;
use App\Models\UserProgress;
use App\Models\CourseSyllabus;
use Illuminate\Http\Request;

class UserCourseController extends Controller
{
/**
     * Display a listing of published and public courses.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        return UserProgress::where('user_id', $user['id'])->get();
    }

    // Takes PID, return which aid should be loaded when user decides to work on the course
    public function start_aid($pid) {
        // Check if user has started work on the course
        $answer = UserAnswer::where('progress_id', $pid)->latest()->first();
        $resume['pid'] = (int)$pid;
        if (is_null($answer)) {
            $cid = json_decode(UserProgress::where('id', $pid)->first())->course_id;
            $resume['aid'] = CourseSyllabus::where('course_id', $cid)->where('seq', 0)->first()->activity_id;
        } else {
            $resume['aid'] = $answer['activity_id'];
        }
        auth()->user()->current_course_id = $pid;
        auth()->user()->update();
        return $resume;
    }

}
