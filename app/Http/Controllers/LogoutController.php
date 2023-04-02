<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class LogoutController extends Controller
{
     /**
     * Log out account user.
     *
     * @return \Illuminate\Routing\Redirector
     */
    public function index()
    {
        Session::flush();
        Inertia::render('/user/logout');
        return redirect('/user/login');
    }
}
