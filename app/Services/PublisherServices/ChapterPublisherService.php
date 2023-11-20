<?php

namespace App\Services\PublisherServices;

use App\Models\Activity;
use App\Models\Chapter;
use App\Models\CourseSyllabus;

class ChapterPublisherService {

    public function initCourse(int $cid)
    {
        $aid = $this->storeActivity();
        $chid = $this->storeChapter();

        $courseSyllabus = new CourseSyllabus();
        $courseSyllabus->activity_id = $aid;
        $courseSyllabus->activity_type = 'info';
        $courseSyllabus->course_id = $cid;
        $courseSyllabus->build_id = 1;
        $courseSyllabus->chapter_id = $chid;
        $courseSyllabus->seq = 0;
        $courseSyllabus->save();

        return $courseSyllabus->id;
    }

    public function storeChapter($title = false)
    {
        $chapter = new Chapter();
        $chapter->label = $title ? $title : "Introductionnn";
        $chapter->save();
        return $chapter->id;
    }

    public function storeActivity($content = false)
    {
        $content = $content ? $content : array(
            "prequestion" => "Default prequestionnn",
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
