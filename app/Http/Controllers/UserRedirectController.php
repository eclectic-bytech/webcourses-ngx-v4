<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Inertia\Inertia;

class UserRedirectController extends Controller
{
    public function user_login_redirect() {
        // Used to redirect from Vue to Angular without getting stuck in an iframe.
        // Solves issue #81.
        return Inertia::location('/webcourses/user/webcourses');
    }
}
