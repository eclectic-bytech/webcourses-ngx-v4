<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coupon;
use App\Models\Course;
use App\Models\Publisher;
use App\Models\UserProgress;
use Illuminate\Support\Facades\DB;


class CouponController extends Controller
{
    // displays in publisher's console all codes including usage level
    public function index() {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();
        $courses = Course::where('publisher_id', $publisher->id)->get();

        $coupons = [];
        foreach ($courses as $key => $course) {
            $coupons[$key]['course'] = $course;
            $coupons[$key]['coupons'] = Coupon::where('cid', $course->id)->get();
        }

        return $coupons;
    }

    public function coupon() {
        return $this->belongsTo(Course::class);
    }

    public function applyAccessCode($code_hash) {
        $user = auth()->user();
        $uid = $user->id;

        $code_info = Coupon::with(['course', 'publisher'])->find($code_hash);
        if ($code_info) {
            if ($this->userAlreadyEnrolled($uid, $code_info['cid'])) {
                $code['status'] = $this->couponMessage('enrolled');
            } else {
                $code['status'] = $this->validateCode($code_info);
                $code['details'] = $code_info;

                if ($code['status']['valid']) $pid = $this->grantAccess($code_info['course']['id'], $uid);
                if ($pid) $this->incrementCodeUses($code_info);
            }
        } else {
            $code['status'] = $this->couponMessage('invalid');
        }

        return $code;
    }


    public function validateCode($code_info) {
        // $now = new date('Y-m-d H:i:s');
        $now = date(DATE_ATOM);
        if ( $now > $code_info['expiry'] ) return $this->couponMessage('expired');

        // Max set to 0 means unlimited uses
		if (
            $code_info['uses_max'] &&
            $code_info['uses'] >= $code_info['uses_max']
        ) return $this->couponMessage('uses_max');

        return $this->couponMessage('valid');
    }

    public function grantAccess($cid, $uid) {
        return DB::table('user_progress')->insertGetId(
            array(
                'user_id' => $uid,
                'course_id' => $cid,
                'build_id' => 0,
                'created_at' => date(DATE_ATOM),
                'demo' => 0
            )
        );
    }

    public function incrementCodeUses($code_info) {
        DB::table('coupons')->where('id', $code_info['id'])->increment('uses');
    }

    public function userAlreadyEnrolled($uid, $cid) {
        $userProgress = UserProgress
            ::where('user_id', $uid)
            ->where('course_id', $cid)
            ->where('demo', false)
            ->first();
        return ($userProgress) ? true : false;
    }

    public function couponMessage($status) {
        $message['inactive'] = array("valid" => false, "cssClass" => "text-danger", "message" => "Inactive code");
        $message['expired'] = array("valid" => false, "cssClass" => "text-danger", "message" => "Code expired");
        $message['uses_max'] = array("valid" => false, "cssClass" => "text-danger", "message" => "Code maximum uses reached");
        $message['valid'] = array("valid" => true, "cssClass" => "text-success", "message" => "Code applied");
        $message['invalid'] = array("valid" => false, "cssClass" => "text-warning", "message" => "Invalid code");
        $message['enrolled'] = array("valid" => false, "cssClass" => "text-warning", "message" => "Access code already applied");
        return $message[$status];
    }

}
