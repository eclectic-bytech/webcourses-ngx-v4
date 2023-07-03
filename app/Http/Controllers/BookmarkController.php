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
     * toggles if the user has the activity bookmarked.
     */
    public function bookmark_toggle($aid)
    {
        $user = auth()->user();
        $pid = UserProgress::where('user_id',$user->id)->where('selected_aid',$aid)->first()->id;

        if (!Bookmark::where('pid',$pid)->where('aid',$aid)->first()){
            $activity = Activity::where('id',$aid)->first();
            $label = strip_tags($activity->prequestion);
            $bookmark = new Bookmark();
            $bookmark->aid = $aid;
            $bookmark->pid = $pid;
            $bookmark->label = $label;
            $bookmark->save();
        }else{
            Bookmark::where('pid',$pid)->where('aid',$aid)->first()->delete();
        }
    }
}