<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AngularController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        return view('angular', ['user' => $user]);
    }
}
