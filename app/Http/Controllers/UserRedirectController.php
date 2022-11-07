<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserRedirectController extends Controller
{
    public function user_login_redirect() {
        // return redirect()->route("/webcourses/user");
        // return to_route("webcourses/user");
        return "hello world";
    }
}
