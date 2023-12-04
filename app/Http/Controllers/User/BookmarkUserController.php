<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use App\Models\Bookmark;
use App\Models\UserProgress;
use App\Models\Activity;
use App\Models\CourseSyllabus;
use Carbon\Carbon;

class BookmarkUserController extends Controller
{
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

}
