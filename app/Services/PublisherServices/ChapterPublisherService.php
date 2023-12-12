<?php

namespace App\Services\PublisherServices;

use App\Models\Activity;
use App\Models\Chapter;

class ChapterPublisherService {

    public function storeChapter($title = false)
    {
        $chapter = new Chapter();
        $chapter->label = $title ? $title : "Introduction";
        $chapter->save();
        return $chapter->id;
    }

}
