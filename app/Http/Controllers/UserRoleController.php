<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserRole;
use App\Models\User;

class UserRoleController extends Controller
{
    // public function store($role_id?) {
    //     $user_role = new UserRole();
    // }

    public function interest_expressed() {
        UserRole::firstOrCreate(
            ['user_id' => auth()->user()->id, 'role_id' => 4]
        );
    }

    public function request_access() {
        UserRole::updateOrCreate(
            ['user_id' => auth()->user()->id, 'role_id' => 4],
            ['user_id' => auth()->user()->id, 'role_id' => 5]
        );
    }

    public function builder_sub() {
        UserRole::firstOrCreate(
            ['user_id' => auth()->user()->id, 'role_id' => 6]
        );
    }

}
