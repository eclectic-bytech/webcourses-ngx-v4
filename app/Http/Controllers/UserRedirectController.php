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
        // return redirect()->action('App\Http\Controllers\AngularController@index');
        // return redirect("/webcourses/user");
        // return redirect()->route("/webcourses/user");

        // redirects, but seems to not load the view - unprocessed angular blade is shown
            // return redirect('/webcourses/user');
            // return redirect()->route('kay', 'webcourses/user');
            // return redirect()->action('App\Http\Controllers\AngularController@index', 'webcourses/user');

        Route::get('webcourses/user', function() {
            return redirect()->action('App\Http\Controllers\AngularController@index');
        });

        // return "hello world";
    }
}
