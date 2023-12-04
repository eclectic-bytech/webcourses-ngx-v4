<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserRole;

class UserController extends Controller
{
    public function loggedInUser()
    {
        if (auth()->user()) {
            $user = auth()->user();

            $user_roles = UserRole::where('user_id', $user->id)->get();

            // Pluck converts to flat array with values only.
            $user['user_roles'] = $user_roles->pluck('role_id')->all();
            return $user;
        } else {
            return false;
        }
    }

    public function save_name(Request $request)
    {
        $input = $request->input();
        return tap(User::where('id', resolve('uid')))
            ->update([
                'first_name' => $input['first_name'],
                'last_name' => $input['last_name']
            ])
            ->first();
    }

}
