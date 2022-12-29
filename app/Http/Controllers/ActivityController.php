<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Controllers\UserAnswerController;

use App\Models\Activity;
use App\Models\Help;
use App\Models\UserAnswer;
use App\Models\UserLongAnswer;
use App\Models\ActivityDefaultAnswer;

class ActivityController extends Controller
{
    public function activity($aid, $pid) {
        return Activity
            ::where('id', $aid)
            ->with('meta', 'answers', 'default_answer')
            ->with(['user_answers' => function ($query) use ($pid) {
                $query::where('pid', $pid);
            }])
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
        $activityy = clone $this->user_long_answer($activityy);
        $activityy = clone $this->activity_default_answer($activityy, $pid);

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

    private function activity_default_answer($activity, $pid) {
        if (is_null($activity['default_answer'])) {
            unset($activity['default_answer']);
        } else {
            if ($activity['default_answer']['source'] === 1) {
                $default_answer = ActivityDefaultAnswer
                    ::where('aid', $activity['default_answer']['id'])
                    ->first();
            } else {
                $answer_meta = UserAnswer
                    ::where('activity_id', $activity['default_answer']['id'])
                    ->where('progress_id', $pid)
                    ->first();

                $default_answer = UserLongAnswer
                    ::where('id', $answer_meta['answer_id'])
                    ->first();
            }

            $answer = $default_answer['answer'];
            unset($activity['default_answer']);
            $activity['default_answer'] = $answer;
        }
        return $activity;
    }

    private function user_long_answer($activity) {
        if ($activity['user_answers']->isNotEmpty()) {
            if ($activity['meta']['activity_type'] === 'textarea' || $activity['meta']['activity_type'] === 'text') {
                $user_long_answer = UserLongAnswer
                    ::where('id', $activity['user_answers'][0]['answer_id'])
                    ->first();

                $activity['user_long_answer'] = $user_long_answer['answer'];
            }
        } else {
            // Running isNotEmpty check creates empty $activity['user_answers'].
            // Remove it since there are no user answers/
            unset($activity['user_answers']);
        }
        return $activity;
    }

}
