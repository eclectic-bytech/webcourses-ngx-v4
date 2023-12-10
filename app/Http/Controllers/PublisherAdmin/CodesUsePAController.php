<?php

namespace App\Http\Controllers\PublisherAdmin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;

use App\Models\CodesUse;
use App\Models\Course;
use App\Models\Coupon;

class CodesUsePAController extends Controller
{
    public function index($code_id) {
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
                    ->paginate(50);
                return $data;
            }
        }
        return $data;
    }

}
