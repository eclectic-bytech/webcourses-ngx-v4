<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;

class UserRedirectController extends Controller
{
    public function user_login_redirect(Request $request) {
        // Resolves issue #185 - retains course access code in URL after reg/login
        $angular_url = '/webcourses/user/webcourses';

        $referring_url = parse_url($request->server('HTTP_REFERER'));

        if (isset($referring_url['query']))
            parse_str($referring_url['query'], $params);

        $redirect = (isset($params['code'])) ? $angular_url . '?code=' . $params['code'] : $angular_url;

        // Used to redirect from Vue to Angular without getting stuck in an iframe.
        // Solves issue #81.
        return Inertia::location($redirect);
    }
}
