<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\UserAnswerController;

use App\Models\Activity;
use App\Models\Help;

class ActivityController extends Controller
{
    public function activity($aid, $pid) {
        return Activity
            ::where('id', $aid)
            ->with('meta', 'answers')
            ->first();
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

    public function build_activity($aid, $pid) {

        $activity = $this->activity($aid, $pid);

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

        $activity = $this->built_activity_post_process($activity);

        return $activity;
        // create the requested activity
    }

    private function built_activity_post_process($activity) {

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
}
