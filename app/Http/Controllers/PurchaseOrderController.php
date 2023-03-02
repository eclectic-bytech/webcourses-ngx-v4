<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\UserProgress;

class PurchaseOrderController extends Controller
{
    public function purchase_course(int $cid) {
        $uid = auth()->user()->id;

        if ($uid) {
            $user_progress = json_decode(getUserProgress($uid, $cid));

            $msg = ($user_progress) ? "USER HAS ALREADY ACCESS" : "USER IS IN NEED OF EDUCATION";
            return $msg;
        }

        return "THERE IS NO USER";
    }
}
