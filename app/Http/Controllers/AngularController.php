<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class AngularController extends Controller
{
    public function index()
    {
        // $user = auth()->user();
        return view('angular');
    }
}
