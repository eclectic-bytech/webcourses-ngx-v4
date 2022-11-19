<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;
use App\Models\Help;

class ActivityController extends Controller
{
    public function activity($aid = false) {
        $activity = Activity
            ::where('id', $aid)
            ->with('meta', 'answers', 'user_answers')
            ->get();

        if (!count($activity[0]['user_answers'])) {
            unset($activity[0]['user_answers'], $activity[0]['after_word']);
        } else {
            foreach ($activity[0]['answers'] as $key => $answer) {
                foreach ($activity[0]['user_answers'] as $key2 => $user_answer) {
                    if ($answer['id'] === $user_answer['answer_id']) {
                        $activity[0]['answers'][$key]['selected'] = true;
                    }
                }
            }
        }

        // Answer caption for Click type activity where meta.style is image need json_decode
        if ($activity[0]['meta']['activity_type'] === "click" && $activity[0]['meta']['style'] === "image") {
            foreach ($activity[0]['answers'] as $i => $answer) {
                if(isJSON($answer['caption'])) {
                    $activity[0]['answers'][$i]['caption'] = json_decode($answer['caption']);
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
