<?php

namespace App\Http\Controllers;

use App\Models\UserProgress;

use Illuminate\Http\Request;

class UserProgressController extends Controller
{
    public function index()
    {
        // $user = auth()->user();
        return UserProgress
            ::where('user_id', 1)
            ->withCount('UserAnswer as total_activities_completed')
            ->get();
    }
}
