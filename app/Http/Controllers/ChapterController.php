<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chapter;
// use App\Models\UserAnswer;

class ChapterController extends Controller
{
    public function chapter($chid) {
        return Chapter
            ::where('id', $chid)
            ->with('syllabus')
            ->first();
    }
}
