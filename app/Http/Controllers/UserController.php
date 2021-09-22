<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    public function loggedInUser()
    {
        return auth()->user();
    }

    public function save_name(Request $request) {
        $input = $request->input();
        $user = auth()->user();
        $name = $input['firstName'] . ' ' . $input['lastName'];

        return User
            ::where('id', $user['id'])
            ->update(['name' => $name]);
    }
}
