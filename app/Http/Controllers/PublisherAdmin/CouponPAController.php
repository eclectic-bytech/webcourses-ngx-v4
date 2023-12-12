<?php

namespace App\Http\Controllers\PublisherAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\Publisher;
use App\Models\Coupon;

class CouponPAController extends Controller
{

    // Display publisher's course access codes with usage level
    public function index(Request $request)
    {
        $cid = ( $request->input('cid') ) ? (int)$request->input('cid') : false;
        $courses_with_codes = [];

        if ($cid) {
            $course = Course::where('publisher_id', resolve('pub_id'))->where('id', $cid)->first();
            $codes = Coupon::where('cid', $cid)->orderBy('created_at', 'desc')->get();
            array_push($courses_with_codes, array("course" => $course, "coupons" => $codes));
        } else {
            $courses = Course::where('publisher_id', resolve('pub_id'))->get();

            foreach ($courses as $key => $course) {
                $codes = Coupon::where('cid', $course->id)->orderBy('created_at', 'desc')->get();
                if ($codes->isNotEmpty()) {
                    array_push($courses_with_codes, array("course" => $course, "coupons" => $codes));
                }
            }
        }

        return $courses_with_codes;
    }

}
