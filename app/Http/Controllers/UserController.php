<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function loggedInUser()
    {
        return auth()->user();
    }

    public function save_name() {
        return "Lenoczka Novikova";
    }
}
