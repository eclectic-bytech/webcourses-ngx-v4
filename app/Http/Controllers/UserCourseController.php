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

        if (is_null($answer)) {
            $progress = json_decode(UserProgress::where('id', $pid)->first());
            // $uid will be used for auth checking, though probably in a guard.
            // $uid = $progress->user_id;
            $cid = $progress->course_id;
            $start_aid = json_decode(CourseSyllabus::where('course_id', $cid)->where('seq', 0)->first())->activity_id;
            return $start_aid;
        } else {
            return $answer['activity_id'];
        }
    }

}
