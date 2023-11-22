<?php

namespace App\Services\PublisherServices;

use App\Models\CourseSyllabus;

class CourseSyllabusPublisherService {

    public function storeCourseSyllabus($cid, $chid, $aid, $seq = 0)
    {
        $seq = $seq ? $seq : $this->getNextSeq($cid);

        $courseSyllabus = new CourseSyllabus();

        $courseSyllabus->activity_id = $aid;
        $courseSyllabus->activity_type = 'info';
        $courseSyllabus->course_id = $cid;
        $courseSyllabus->build_id = 1;
        $courseSyllabus->chapter_id = $chid;
        $courseSyllabus->seq = $seq;
        $courseSyllabus->save();

        return $courseSyllabus->id;
    }

    function getNextSeq($cid)
    {
        $seq = CourseSyllabus::where('course_id', $cid)->max('seq');
        return $seq ? ++$seq : 1;
    }
}
