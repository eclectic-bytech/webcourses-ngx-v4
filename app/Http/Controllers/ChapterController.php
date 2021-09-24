<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChapterController extends Controller
{
    public function chapter($chid) {
        return Chapter
            ::where('id', $chid)
            ->first();
    }
}
