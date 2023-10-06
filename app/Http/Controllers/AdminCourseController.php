<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;
use App\Models\Publisher;

class AdminCourseController extends Controller
{
    public function course($cid) {
        $user = auth()->user();
        $publisher = Publisher::where('owner_uid', $user->id)->first();

        $is_publisher = ($publisher['owner_uid'] === $user->id) ? true : false;
        $is_admin = false;

        foreach ($user['user_roles'] as $key => $role_id) {
            if ($role_id === 1) {
                $is_admin = true;
            }
        }

        if ($is_admin || $is_publisher) {
            return Course
                ::with(['publisher'])
                ->withCount('courseSyllabus as total_activities')
                ->withCount('participants as total_students')
                ->find($cid);
        }

    }
}
