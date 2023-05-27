<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ActivityController;

use App\Models\UserAnswer;
use App\Models\UserLongAnswer;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UserAnswerController extends Controller
{
    public function save_user_answer(Request $request, int $aid) {
        $uid = auth()->user()->id;

        // This should probably be turned into a HasCourseWriteAccess Guard...
        // Maybe two: courseReadAccess, and activityWriteAnswerAccess.
        $activity_meta = getActivityMeta($aid); // global helper defined in app/Helpers/Course.php
        $activity_type = $activity_meta->activity_type;
        $cid = $activity_meta->course_id;
        $chid = $activity_meta->chapter_id;

        // Why do we need json_decode here, but not on $activity_meta?
        $pid = json_decode(getUserProgress($uid, $cid))->id;

        if (isset($pid)) {
        // End Guard?
            $controller = new UserAnswerController();
            $existing_answer = $controller->user_answers($pid, $aid);

            // If user has no answer for this activity, we continue...
            if ($existing_answer->isEmpty()) {
                if ($activity_type === 'text' || $activity_type === 'textarea') {
                    $input = $request->input();

                    $longAnswer = new UserLongAnswer();
                    $longAnswer->answer = $input['answer'];
                    $longAnswer->save();

                    // Save ID of long answer for later processing
                    $answers[0] = $longAnswer->id;
                } else {
                    $answers = ($activity_type === 'info' || $activity_type === 'special') ? [ 42 ] : $request->input();
                    if (!$answers && ($activity_type == 'checkbox' || $activity_type == 'click')) {
                        $answers[0] = 97;
                    }
                }

                foreach ($answers as $key => $answer) {
                    $userAnswer = new UserAnswer();
                    $userAnswer->activity_id = $aid;
                    $userAnswer->chapter_id = $chid;
                    $userAnswer->progress_id = $pid;
                    $userAnswer->answer_id = $answer;
                    $userAnswer->save();

                    $answer_id = $userAnswer->id;
                }

                $controller = new ActivityController();
                return $controller->build_activity($aid, $pid);
            }
        }
        return 0;
    }

    public function user_answer_full_report($pid) {
        return "Hola!";
    }

    public function user_answers(int $pid, int $aid) {
        return UserAnswer
            ::where('progress_id', $pid)
            ->where('activity_id', $aid)
            ->get();
    }

    // public function total_user_answers_in_chapter(int $chid) {
    public function total_user_answers_in_chapter(int $chid) {
        $answers = UserAnswer
            ::where('progress_id', 1)
            ->where('chapter_id', 309)
            // ->groupBy('activity_id')
            ->get();
        return $answers->count();
    }
}
