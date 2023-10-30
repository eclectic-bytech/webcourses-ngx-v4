<?php

namespace App\Http\Controllers\SystemAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Coupon;

class CouponSAController extends Controller
{
    public function recent_code_uses() {
        return Coupon::orderByDesc('updated_at')->limit(5)->get();
    }
}
