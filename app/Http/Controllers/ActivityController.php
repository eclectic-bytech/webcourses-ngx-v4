<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\UserAnswerController;
use App\Models\Activity;
use App\Models\Help;

class ActivityController extends Controller
{
    public function activity($aid = false) {

        // REMEMBER TO START CHECKING FOR USER ID WHEN PULLING user_answers
        $activity = Activity
            ::where('id', $aid)
            ->with('meta', 'answers')
            ->first();

        $uid = auth()->user()->id;
        $pid = getUserProgress($uid, $activity['meta']['course_id'])->id;

        $controller = new UserAnswerController();
        $activity['user_answers'] = $controller->user_answer($pid, $aid);

        if (!count($activity['user_answers'])) {
            unset($activity['user_answers'], $activity['after_word']);
        } else {
            foreach ($activity['answers'] as $key => $answer) {
                foreach ($activity['user_answers'] as $key2 => $user_answer) {
                    if ($answer['id'] === $user_answer['answer_id']) {
                        $activity['answers'][$key]['selected'] = true;
                    }
                }
            }
        }

        // Answer caption for Click type activity where meta.style is image need json_decode
        if ($activity['meta']['activity_type'] === "click" && $activity['meta']['style'] === "image") {
            foreach ($activity['answers'] as $i => $answer) {
                if(isJSON($answer['caption'])) {
                    $activity['answers'][$i]['caption'] = json_decode($answer['caption']);
                }
            }
        }

        return $activity;
    }

    public function help($type = false) {
        if ($type) {
            return Help
                ::where('id', $type)
                ->first();
        } else {
            return false;
        }
    }

}
