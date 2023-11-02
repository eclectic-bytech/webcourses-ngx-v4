<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\UserProgress;
use App\Models\Activity;
use App\Models\CourseSyllabus;
use Illuminate\Http\Request;
use Carbon\Carbon;

class BookmarkController extends Controller
{
    /**
     * creates a new bookmark instance on the bookmark table
     */
    public function store(Request $request)
    {
        $aid = (int)$request->input()['aid'];
        $cid = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
        $pid = UserProgress::where('user_id', resolve('uid'))->where('course_id',$cid)->first()->id;

        $bookmark = new Bookmark();
        $bookmark->aid = $aid;
        $bookmark->pid = $pid;
        $bookmark->label = bookmarkDesc($aid);
        $bookmark->save();

        return $bookmark;
    }

    /**
     * deletes selected bookmark instance on the bookmark table
     */
    public function destroy($aid)
    {
        $cid = CourseSyllabus::where('activity_id', $aid)->first()->course_id;
        $pid = UserProgress::where('user_id', resolve('uid'))->where('course_id',$cid)->first()->id;
        Bookmark::where('pid',$pid)->where('aid',$aid)->first()->delete();
    }

    /**
     * returns a list of bookmarks
     */
    public function index(Request $request)
    {
        $cid = ( $request->input('cid') ) ? (int)$request->input('cid') : false;

        // For now, only when a CID is provided do we want to return a bookmark index.
        // We'll need to address this differently when we allow user to see ALL their bookmarks,
        // e.g. on their profile or courses pages.
        if ($cid) {
            $pid = UserProgress::where('user_id', resolve('uid'))->where('course_id', $cid)->first()->id;
            return Bookmark::where('pid', $pid)->orderBy('aid', 'asc')->get();
        }
    }
}
