<?php

namespace App\Http\Controllers\SystemAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserRole;

class UserRoleSAController extends Controller
{
    public function publisher_interest()
    {
        return UserRole
            ::where('role_id', 4)
            ->orWhere('role_id', 5)
            ->orWhere('role_id', 6)
            ->with(['user'])
            ->get();
    }
}
