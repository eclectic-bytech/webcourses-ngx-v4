<?php

namespace App\Http\Controllers;

use App\Models\UserCourse;
use App\Models\UserAnswer;
use App\Models\UserProgress;
use App\Models\CourseSyllabus;

use App\Http\Controllers\CourseController;

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
        $user_progress = json_decode(UserProgress::where('id', $pid)->first());

        if ($user_progress->user_id === auth()->user()->id) {
            $resume['pid'] = (int)$pid;
            $resume['aid'] = $user_progress->selected_aid;

            // Update user's selected course
            auth()->user()->current_course_id = $user_progress->course_id;
            auth()->user()->update();

            return $resume;
        }

        abort(403);
    }

}
