<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class PurchaseOrderController extends Controller
{
    public function purchase_course(int $cid) {
        return Course::find($cid);
    }
}
