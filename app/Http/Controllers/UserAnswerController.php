<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Http\Request;

class UserAnswerController extends Controller
{
    public function save_user_answer(Request $request, int $aid) {
        // This should probably be turned into a HasCourseWriteAccess Guard...
        $uid = auth()->user()->id;
        $cid = getActivityMeta($aid)->course_id; // global helper defined in app/Helpers/Course.php
        $pid = getUserProgress($uid, $cid)->id; // A pid confirms user is student in course

        $existing_answer = false;

        if ($pid) {
        // End Guard?
            // Check if user already completed this activity
            // get userAnswer where pid=x and where activity_id=y
            $user_answers = $request->Input();
            return $uid;
        } else {
            return 0;
        }
    }
}
