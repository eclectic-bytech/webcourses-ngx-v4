<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\UserRole;
use App\Models\User;

class UserRoleUserController extends Controller
{

    public function store(Request $request)
    {
        switch ( $request->input()['role'] ) {
            case 'interest_expressed':
                UserRole::firstOrCreate(
                    ['user_id' => resolve('uid'), 'role_id' => 4]
                );
                break;

            case 'request_access':
                UserRole::updateOrCreate(
                    ['user_id' => resolve('uid'), 'role_id' => 4],
                    ['user_id' => resolve('uid'), 'role_id' => 5]
                );
                break;

            case 'builder_sub':
                UserRole::firstOrCreate(
                    ['user_id' => resolve('uid'), 'role_id' => 6]
                );
                break;
        }
    }

}
