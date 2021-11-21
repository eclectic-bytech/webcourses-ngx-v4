<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chapter;

class ChapterController extends Controller
{
    public function chapter($chid) {
        return Chapter
            ::where('id', $chid)
            ->with('syllabus')
            ->first();
    }
}
