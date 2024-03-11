<?php

namespace App\Services;

use App\Models\CourseSyllabus;
use App\Models\UserLongAnswer;
use App\Models\ActivityDefaultAnswer;
use App\Models\UserProgress;
use App\Models\Activity;
use App\Models\UserAnswer;


class ActivityService {

    public function activity($aid, $pid) {
        $userProgress = UserProgress::find($pid);
        $userProgress->selected_aid = $aid;
        $userProgress->save();

        return Activity
            ::with('meta', 'answers', 'default_answer')
            ->with(['user_answers' => function ($query) use ($pid) {
                $query->where('progress_id', $pid);
            }])
            ->with(['bookmark' => function ($query) use ($pid, $aid) {
                $query->where('pid', $pid)->where('aid', $aid);
            }])
            ->find($aid)->toArray();
    }

    public function build_activities_meta_set($requested_aid_meta) {
        $cid = $requested_aid_meta->course_id;
        $activities_meta_set = [];

        // get preceding activities: requested activity is not first in set
        $aid_meta = $requested_aid_meta;
        while ($aid_meta->cont === 1) {
            $aid_meta = CourseSyllabus::where('course_id', $cid)
                ->where('seq', $aid_meta->seq - 1)
                ->first();
            array_unshift($activities_meta_set, $aid_meta);
        }

        // with preceding activities added to the set, add the activity that was actyally requested
        array_push($activities_meta_set, $requested_aid_meta);

        // get following activities until we hit an activity that is not a set continuation
        $aid_meta = $requested_aid_meta;

        do {
            $aid_meta = CourseSyllabus::where('course_id', $cid)
                ->where('seq', $aid_meta->seq + 1)
                ->first();
            // is_null checks required on last activity of a course
            if (!is_null($aid_meta) && $aid_meta->cont === 1) {
                array_push($activities_meta_set, $aid_meta);
            }
        } while (!is_null($aid_meta) && $aid_meta->cont === 1);

        return $activities_meta_set;
    }

    public function get_activities($activities_meta_set, $pid) {
        $activity_set = [];
        $i = 0;

        do {
            $activity = $this->build_activity($activities_meta_set[$i]->activity_id, $pid);
            $getNext = isset($activity['user_answers']) ? TRUE : FALSE;

            array_push($activity_set, $activity);
            $i++;
        } while ( isset($activities_meta_set[$i]) && $getNext );

        return $activity_set;
    }

    public function build_activity($aid, $pid) {
        $activityy = $this->activity($aid, $pid);

        if ($activityy['user_answers']) {
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

        $activityy = $this->json_decode_activity_answers($activityy);
        $activityy = $this->user_long_answer($activityy);
        $activityy = $this->activity_default_answer($activityy, $pid);

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

    private function user_long_answer($activity)
    {
        if (isset($activity['user_answers'])) {
            $a_type = $activity['meta']['activity_type'];
            if ( $a_type === 'textarea' || $a_type === 'text') {
                $user_long_answer = UserLongAnswer::find($activity['user_answers'][0]['answer_id']);
                $activity['user_long_answer'] = $user_long_answer['answer'];
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

                $default_answer = UserLongAnswer::find($answer_meta['answer_id']);
            }

            unset($activity['default_answer']);
            $activity['default_answer'] = $default_answer['answer'];
        }
        return $activity;
    }

    function perform_count($aids_set) {
        $total['correct'] = $total['wrong'] = $total['total'] = 0;

        foreach ($aids_set as $key => $aid) {
            $activity = $this->build_activity($aid, resolve('pid'));
            foreach ($activity['answers'] as $j => $answer) {
                if ($answer['correct']) $total['total']++;
                if (isset($answer['selected'])) {
                    $answer['correct'] ? $total['correct']++ : $total['wrong']++;
                }
            }
        }
        $total['missed'] = $total['total'] - $total['correct'];
        return $total;
    }
}
