<?php

namespace App\Http\Controllers;

use App\Models\UserAnswer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserAnswerController extends Controller
{
    // Currently returns autoincrement ID of inserted answer. Needs to return:
    // { }
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
            $existing_answer = $controller->user_answer($pid, $aid);

            if (!$existing_answer) {
                // If user has no answer for this activity, we continue...

                // if ($activity_type === 'info') { }
                // Do this using Eloquent?
                // Remove Carbon:now() in fav of an auto DB solution?
                // Or is this max compatibility, regardless of DB?
                $answer_id = DB::table('user_answers')->insertGetId(
                    array(
                        'activity_id' => $aid,
                        'chapter_id' => $chid,
                        'progress_id' => $pid,
                        'answer_id' => 42,
                        'created_at' => Carbon::now()
                    )
                );
                $answer['answers'] = array();
                return $answer;
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
