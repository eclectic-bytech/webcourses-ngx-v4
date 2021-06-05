<?php

namespace App\Http\Controllers;

use App\Models\UserProgress;
use Illuminate\Http\Request;

class UserProgressController extends Controller
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

    public function indexWithCourse()
    {
        $user = auth()->user();
        return UserProgress
            ::where('user_id', $user['id'])
            ->with('course')
            ->get();
    }
}
