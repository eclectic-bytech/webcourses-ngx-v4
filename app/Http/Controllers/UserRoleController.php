<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserRole;
use App\Models\User;

class UserRoleController extends Controller
{
    public function publisher_interest()
    {
        return UserRole
            ::where('role_id', 4)
            ->orWhere('role_id', 5)
            ->with(['user'])
            ->get();
    }
}
