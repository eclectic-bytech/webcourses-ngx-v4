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

        if ($activityy['user_answers']->isNotEmpty()) {
            foreach ($activityy['answers'] as $key => $answer) {
                foreach ($activityy['user_answers'] as $key2 => $user_answer) {
                    if ($answer['id'] === $user_answer['answer_id']) {
                        $activityy['answers'][$key]['selected'] = true;
                    }
                }
            }
        } else {
            foreach ($activityy['answers'] as $key => $answer) {
                unset($activityy['answers'][$key]['correct']);
            }
            unset(
                $activityy['after_word'],
                $activityy['user_answers']
            );
        }

        $activityy = clone $this->json_decode_activity_answers($activityy);

        return $activityy;
    }

    private function json_decode_activity_answers($activity) {
        // Some activity answers are in JSON format. This routine prevents escaping of their
        // quotation marks with slashes.
        foreach ($activity['answers'] as $i => $answer) {
            if(isJSON($answer['caption'])) {
                $activity['answers'][$i]['caption'] = json_decode($answer['caption']);
            }
        }
        return $activity;
    }

}
