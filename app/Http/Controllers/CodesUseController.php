<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CodesUse;

class CodesUseController extends Controller
{
    public function access_code_users($code_id) {
        return CodesUse::where('code_id', $code_id)->get();
    }
}
