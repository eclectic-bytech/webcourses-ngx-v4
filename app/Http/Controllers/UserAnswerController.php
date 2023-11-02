<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ActivityController;

use App\Models\UserAnswer;
use App\Models\UserLongAnswer;
use App\Models\CourseSyllabus;
use App\Models\UserProgress;

use Illuminate\Http\Request;
use Carbon\Carbon;

class UserAnswerController extends Controller
{
    public function save_user_answer(Request $request, int $aid) {
        // This should probably be turned into a HasCourseWriteAccess Guard...
        // Maybe two: courseReadAccess, and activityWriteAnswerAccess.
        $activity_meta = CourseSyllabus::where('activity_id', $aid)->first();
        $activity_type = $activity_meta->activity_type;
        $cid = $activity_meta->course_id;
        $chid = $activity_meta->chapter_id;

        $pid = UserProgress::where('user_id', resolve('uid'))
            ->where('course_id', $cid)
            ->firstOrFail()->id;

        if ($pid) {
        // End Guard?
            $controller = new UserAnswerController();
            $existing_answer = $controller->user_answers($pid, $aid);

            // If user has no answer for this activity, we continue...
            if ($existing_answer->isEmpty()) {
                if ($activity_type === 'text' || $activity_type === 'textarea') {
                    $input = $request->input();

                    // Using DB::table is a sure sign we're not using Eloquent.
                    // An example of replacing query builder (DB::table) with Eloquent can be found here:
                    // https://github.com/eclectic-bytech/webcourses-ngx-v4/commit/007f61ace77348af3d56c6e3a1c705599e406485

                    // Save answer using Eloquent instead of DB::table (raw query)
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
