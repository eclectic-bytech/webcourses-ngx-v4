<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\UserProgress;
use App\Models\Activity;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookmarkController extends Controller
{
    /**
     * creates a new bookmark instance on the bookmark table
     */
    public function bookmark_create($aid)
    {
        $user = auth()->user();
        $pid = UserProgress::where('user_id',$user->id)->where('selected_aid',$aid)->first()->id;
            $activity = Activity::where('id',$aid)->first();
            $label = strip_tags($activity->prequestion);
            $bookmark = new Bookmark();
            $bookmark->aid = $aid;
            $bookmark->pid = $pid;
            $bookmark->label = $label;
            $bookmark->save();
    }

    /**
     * deletes selected bookmark instance on the bookmark table
     */
    public function bookmark_delete($aid)
    {
        $user = auth()->user();
        $pid = UserProgress::where('user_id',$user->id)->where('selected_aid',$aid)->first()->id;
        Bookmark::where('pid',$pid)->where('aid',$aid)->first()->delete();
    }
}
