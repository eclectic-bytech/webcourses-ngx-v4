<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// use Carbon\Carbon;
use App\Services\ActivityService;

use App\Models\UserAnswer;
use App\Models\UserLongAnswer;
use App\Models\CourseSyllabus;
use App\Models\UserProgress;


class UserAnswerUserController extends Controller
{
    public function save_user_answer(Request $request, int $aid) {
        $activity_type = resolve('activityMeta')->activity_type;
        $cid = resolve('activityMeta')->course_id;
        $chid = resolve('activityMeta')->chapter_id;

        $existing_answer = UserAnswer::where('progress_id', resolve('pid'))
            ->where('activity_id', $aid)
            ->get();

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
                $userAnswer->progress_id = resolve('pid');
                $userAnswer->answer_id = $answer;
                $userAnswer->save();

                $answer_id = $userAnswer->id;
            }

            $service = new ActivityService();
            return $service->build_activity($aid, resolve('pid'));
        }
        return 0;
    }

}
