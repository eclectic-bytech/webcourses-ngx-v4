<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;

class CourseUserController extends Controller
{
    public function index()
    {
        // Opting for fetching published courses only,
        // controlling unpublishing of courses with students.
        return Course::where('courses.published', 1)
            ->whereHas('UserProgress')
            ->withCount([
                'courseSyllabus as total_activities',
                'participants as total_students'
            ])
            ->with(['publisher', 'userProgress'])
            ->get();
    }
}
