<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Http\Request;

class UserAnswerController extends Controller
{
    public function user_answer(Request $request, int $aid) {
        $user = auth()->user();
        $user_answers = $request->Input();
        $activity_meta = activityMeta($aid);
        return $activity_meta;
        // Check if user has access to course:
        //      - get aid's cid
        //          - one aid can be added to multiple courses problem
        //      - get user progress
        //  If user progress exists, user has read access to the course (which comes with write answers access)
        // return 2100;
    }
}
