<?php

namespace App\Services\PublisherServices;

use App\Models\CourseSyllabus;

class CourseSyllabusPublisherService {

    public function storeCourseSyllabus($cid, $chid, $aid)
    {
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

}
