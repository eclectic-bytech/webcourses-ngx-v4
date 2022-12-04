<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coupons;

class CouponsController extends Controller
{
    public function index() {
        return Coupons::get();
    }
}
