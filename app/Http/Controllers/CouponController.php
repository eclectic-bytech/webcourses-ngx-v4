<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coupon;
use App\Models\Course;
use App\Models\Publisher;
use App\Models\UserProgress;
use App\Models\CourseSyllabus;
use App\Models\CodesUse;


class CouponController extends Controller
{
    // displays in publisher's console all codes including usage level
    public function index() {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();
        $coupons = [];

        if (isset($publisher)) {
            $courses = Course::where('publisher_id', $publisher->id)->get();

            foreach ($courses as $key => $course) {
                $coupons[$key]['course'] = $course;
                $coupons[$key]['coupons'] = Coupon::where('cid', $course->id)->orderBy('created_at', 'desc')->get();
            }
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
                $code['label'] = $code_info->label;

                if ($code['status']['valid']) {
                    $cid = $code_info['course']['id'];
                    $pid = $this->grantAccess($cid, $uid);
                    if ($pid) {
                        $this->incrementCodeUses($code_hash);
                        $this->updateCodesUsesTable($code_hash, $pid);
                        $code['first_aid'] = CourseSyllabus::where('course_id', $cid)->where('seq', 0)->first()->activity_id;
                    }
                }
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
        $user_progress = new UserProgress;
        $user_progress->user_id = $uid;
        $user_progress->course_id = $cid;
        $user_progress->build_id = 0;
        $user_progress->demo = 0;
        $user_progress->save();
        return $user_progress->id;
    }

    public function updateCodesUsesTable($code_id, $pid) {
        // Insert record into codes_uses table
        $codes_uses = new CodesUse;
        $codes_uses->code_id = $code_id;
        $codes_uses->user_progress_id = $pid;
        $codes_uses->save();
    }

    public function incrementCodeUses($code_hash) {
        Coupon::find($code_hash)->increment('uses');
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
        $message['valid'] = array("valid" => true, "cssClass" => "text-success", "message" => "Access Granted");
        $message['invalid'] = array("valid" => false, "cssClass" => "text-warning", "message" => "Invalid code");
        $message['enrolled'] = array("valid" => false, "cssClass" => "text-warning", "message" => "Access code already applied");
        return $message[$status];
    }

}
