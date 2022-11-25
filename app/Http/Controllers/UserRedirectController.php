<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AngularController;
use Inertia\Inertia;

class UserRedirectController extends Controller
{
    public function user_login_redirect() {
        return Inertia::location('/webcourses/user/webcourses');
    }
}
