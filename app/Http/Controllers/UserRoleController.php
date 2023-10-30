<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserRole;
use App\Models\User;

class UserRoleController extends Controller
{

    public function interest_expressed() {
        UserRole::firstOrCreate(
            ['user_id' => resolve('uid'), 'role_id' => 4]
        );
    }

    public function request_access() {
        UserRole::updateOrCreate(
            ['user_id' => resolve('uid'), 'role_id' => 4],
            ['user_id' => resolve('uid'), 'role_id' => 5]
        );
    }

    public function builder_sub() {
        UserRole::firstOrCreate(
            ['user_id' => resolve('uid'), 'role_id' => 6]
        );
    }

}
