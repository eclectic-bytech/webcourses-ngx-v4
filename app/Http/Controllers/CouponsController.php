<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coupons;
use App\Models\Course;
use App\Models\Publisher;

class CouponsController extends Controller
{
    public function index() {
        $uid = auth()->user()->id;
        $publisher = Publisher::where('owner_uid', $uid)->first();
        $courses = Course::where('publisher_id', $publisher->id)->get();

        $coupons = [];
        foreach ($courses as $key => $course) {
            $coupons[$key]['course'] = $course;
            $coupons[$key]['coupons'] = Coupons::where('cid', $course->id)->get();
        }

        return $coupons;
    }

    public function coupon() {
        return $this->belongsTo(Course::class);
    }

    public function applyPublicCourseCoupon($cid, $coupon) {
        $coupon = array("status" => $this->couponMessage('valid'));
        return $coupon;
    }

    public function applyPrivateCourseCoupon($coupon) {
        $coupon = array("status" => $this->couponMessage('expired'));
		return $coupon;
    }

    public function couponMessage($status) {
        $message['inactive'] = array("valid" => false, "cssClass" => "danger", "message" => "Inactive code.");
        $message['expired'] = array("valid" => false, "cssClass" => "danger", "message" => "Code expired.");
        $message['maxuses'] = array("valid" => false, "cssClass" => "danger", "message" => "Code maximum uses reached.");
        $message['cannotApply'] = array("valid" => false, "cssClass" => "warning", "message" => "Code can't be applied here.");
        $message['valid'] = array("valid" => true, "cssClass" => "success", "message" => "Code applied.");

        return $message[$status];
    }
}
