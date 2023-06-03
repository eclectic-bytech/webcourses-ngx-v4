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

}
