<?php

namespace App\Http\Controllers;

use App\Models\CourseSyllabus;
use App\Models\ActivityBookmark;
use App\Models\UserProgress;
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

        if (!ActivityBookmark::where('pid',$pid)->where('aid',$aid)->first()){
            $bookmark = new ActivityBookmark();
            $bookmark->aid = $aid;
            $bookmark->pid = $pid;
            $bookmark->save();
        }else{
            ActivityBookmark::where('pid',$pid)->where('aid',$aid)->first()->delete();
        }
    }
}
