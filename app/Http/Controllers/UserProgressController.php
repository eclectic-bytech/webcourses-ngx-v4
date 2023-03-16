<?php

namespace App\Http\Controllers;

use App\Models\UserProgress;

use Illuminate\Http\Request;

class UserProgressController extends Controller
{
    public function userProgress(int $uid, int $cid) {
        return UserProgress
            ::where('user_id', $uid)
            ->where('course_id', $cid)
            ->first();
    }

    public function completion_cert(int $pid) {
        return "Progress ID: $pid";
    }

}
