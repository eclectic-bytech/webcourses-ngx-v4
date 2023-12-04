<?php

namespace App\Http\Controllers\SystemAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserSAController extends Controller
{
    public function recent_logins() {
        return User::orderByDesc('updated_at')->limit(10)->get();
    }
}
