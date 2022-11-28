<?php

use App\Http\Controllers\SyllabusController;
use App\Models\Syllabus;

function getActivityMetaBySeq($cid, $seq) {
    // echo $cid;
    return Syllabus
        ::where('course_id', $cid)
        ->where('seq', $seq)
        ->first();
}
