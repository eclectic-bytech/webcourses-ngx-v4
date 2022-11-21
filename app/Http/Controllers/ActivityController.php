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
            ->with('meta', 'answers', 'user_answers')
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
        $activityy = clone $this->activity($aid, $pid);

        foreach ($activityy['answers'] as $key => $answer) {
            if (count($activityy['user_answers'])) {
                foreach ($activityy['user_answers'] as $key2 => $user_answer) {
                    if ($answer['id'] === $user_answer['answer_id']) {
                        $activityy['answers'][$key]['selected'] = true;
                    }
                }
            } else {
                unset(
                    $activityy['answers'][$key]['correct'],
                    $activityy['after_word'],
                    $activityy['user_answers']
                );
            }
        }

        $activityy = clone $this->built_activity_post_process($activityy);

        return $activityy;
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
