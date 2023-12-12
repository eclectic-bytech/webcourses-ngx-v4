<?php

namespace App\Services\PublisherServices;

use App\Models\Activity;

class ActivityPublisherService {

    public function storeActivity($content = false)
    {
        $content = $content ? $content : array(
            "prequestion" => "Default prequestion9",
            "question" => "Default question",
            "assess_text" => "Default assess text",
            "after_word" => "Default after word"
        );

        $activity = new Activity();
        $activity->prequestion = $content['prequestion'];
        $activity->question = $content['question'];
        $activity->assess_text = $content['assess_text'];
        $activity->after_word = $content['after_word'];
        $activity->save();

        return $activity->id;
    }

}
