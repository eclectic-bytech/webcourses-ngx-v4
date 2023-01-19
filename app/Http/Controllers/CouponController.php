<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coupon;
use App\Models\Course;
use App\Models\Publisher;
use App\Models\UserProgress;

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

    public function applyPublicCourseCoupon(int $cid, $coupon) {
        $uid = auth()->user()->id;

        if (!$cid && !$uid) {
            # Only logged in users should be able to submit a code without cid
            $code['status'] = $this->couponMessage('bad_code');
        } else {
            $code_info = Coupon::with(['course', 'publisher'])->find($coupon);
            if ($code_info) {
                if ($this->userAlreadyEnrolled($uid, $code_info['cid'])) {
                    $code['status'] = $this->couponMessage('enrolled');
                } else {
                    $code['status'] = $this->validateCode($code_info);
                    $code['details'] = $code_info;
                }
            } else {
                $code['status'] = $this->couponMessage('invalid');
            }
        }

        return $code;
    }

    public function applyPrivateCourseCoupon($coupon) {
        $coupon = array("status" => $this->couponMessage('expired'));
		return $coupon;
    }


    public function validateCode($code_info) {
        return $this->couponMessage('valid');
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
        $message['inactive'] = array("valid" => false, "cssClass" => "danger", "message" => "Inactive code.");
        $message['expired'] = array("valid" => false, "cssClass" => "danger", "message" => "Code expired.");
        $message['maxuses'] = array("valid" => false, "cssClass" => "danger", "message" => "Code maximum uses reached.");
        $message['cannot_apply'] = array("valid" => false, "cssClass" => "warning", "message" => "Code can't be applied here.");
        $message['valid'] = array("valid" => true, "cssClass" => "success", "message" => "Code applied.");
        $message['invalid'] = array("valid" => false, "cssClass" => "warning", "message" => "Invalid code.");
        $message['enrolled'] = array("valid" => false, "cssClass" => "warning", "message" => "Access code already applied.");
        $message['bad_code'] = array("valid" => false, "cssClass" => "warning", "message" => "Something went wrong.");
        return $message[$status];
    }

}
