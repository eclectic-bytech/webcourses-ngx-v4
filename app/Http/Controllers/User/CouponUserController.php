<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Stripe\Charge;
use Stripe\StripeClient;

use App\Models\Coupon;
use App\Models\UserProgress;
use App\Models\CourseSyllabus;
use App\Models\CodesUse;

use App\Notifications\AccessGrantedNotification;

class CouponUserController extends Controller
{
    public function applyAccessCode($code_hash)
    {
        $code_info = Coupon::with(['course', 'publisher'])->find($code_hash);
        if ($code_info) {
            if ($this->userAlreadyEnrolled(resolve('uid'), $code_info['cid'])) {
                $code['status'] = $this->couponMessage('enrolled');
            } else {
                $code['status'] = $this->validateCode($code_info);
                $code['label'] = $code_info->label;

                if ($code['status']['valid']) {
                    $cid = $code_info['course']['id'];
                    $pid = grantAccess($cid, resolve('uid'));
                    if ($pid) {
                        $this->incrementCodeUses($code_hash);
                        $this->updateCodesUsesTable($code_hash, $pid);
                        $code['first_aid'] = CourseSyllabus::where('course_id', $cid)->where('seq', 0)->first()->activity_id;

                        resolve('uid')->notify(new AccessGrantedNotification($cid));
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
        $message['enrolled'] = array("valid" => false, "cssClass" => "text-warning", "message" => "Course already unlocked");
        return $message[$status];
    }

    public function checkout($amount) {
        \Stripe\Stripe::setApiKey( env('STRIPE_SECRET') );

        $checkout_session = \Stripe\Checkout\Session::create([
            'line_items' => [[
                'price' => env('ACCESS_CODE_PRICE_ID'),
                'quantity' => $amount,
            ]],
            'automatic_tax' => [ 'enabled' => true ],
            'mode' => 'payment',
            'success_url' => env('APP_URL') . '/webcourses/admin/publisher/discount-codes',
            'cancel_url' => env('APP_URL') . '/cancel.html'
        ]);

        return json_encode($checkout_session->url);
    }

}
