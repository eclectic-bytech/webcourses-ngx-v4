<?php

namespace App\Http\Controllers;

use App\Models\UserCourse;
use App\Models\UserAnswer;
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
        return UserAnswer
            ::where('progress_id', $pid)
            ->latest()
            ->first();
    }

}
