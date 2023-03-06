<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CodesUse;
use App\Models\Course;
use App\Models\Coupon;
use Illuminate\Support\Facades\DB;

class CodesUseController extends Controller
{
    public function access_code_users($code_id) {
        $uid = auth()->user()->id;
        $code = Coupon::find($code_id);
        $course = Course::where('id', $code->cid)->with('publisher')->first();

        if ($uid === $course['publisher']['owner_uid']) {
            return CodesUse::where('code_id', $code_id)
                ->with('user')
                ->withCount(['completed_activities' => function($query) {
                    $query->select(DB::raw('count(distinct(activity_id))'));
                }])
                ->get();
        }

        return [];
    }
}
