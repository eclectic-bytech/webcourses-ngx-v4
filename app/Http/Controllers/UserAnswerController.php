<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Http\Request;

class UserAnswerController extends Controller
{
    public function save_user_answer(Request $request, int $aid) {
        // This should probably be turned into a HasCourseWriteAccess Guard...
        // Maybe two: courseReadAccess, and activityWriteAnswerAccess.
        $activity_meta = getActivityMeta($aid); // global helper defined in app/Helpers/Course.php

        $uid = auth()->user()->id;
        $cid = $activity_meta->course_id;
        $pid = getUserProgress($uid, $cid)->id; // A pid confirms user is student in course
        $activity_type = $activity_meta->activity_type;

        if (isset($pid)) {
        // End Guard?
            $controller = new UserAnswerController();
            $existing_answer = $controller->user_answer($pid, $aid);

            if (!$existing_answer) {
                $user_answers = $request->Input();
                return 1;
            }
        }
        return 0;
    }

    public function user_answer(int $pid, int $aid) {
        return UserAnswer
            ::where('progress_id', $pid)
            ->where('activity_id', $aid)
            ->first();
    }
}
