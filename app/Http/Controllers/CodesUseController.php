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
        $data['code'] = Coupon::find($code_id);
        $data['course'] = Course::where('id', $data['code']->cid)
            ->with('publisher')
            ->withCount('courseSyllabus as total_activities')
            ->first();

        if ($data['code']) {
            if (auth()->user()->id === $data['course']['publisher']['owner_uid'])
            {
                $data['code-uses'] = CodesUse::where('code_id', $code_id)
                    ->with('user')
                    ->withCount(['completed_activities' => function($query) {
                        $query->select(DB::raw('count(distinct(activity_id))'));
                    }])
                    ->orderBy('created_at', 'desc')
                    ->get();
                return $data;
            }
        }
        return $data;
    }

}
