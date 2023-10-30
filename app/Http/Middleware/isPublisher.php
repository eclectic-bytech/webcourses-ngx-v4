<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\UserRole;
use App\Models\Publisher;

class isPublisher
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (UserRole::where('user_id', auth()->user()->id)->where('role_id', 2)->exists()) {
            $publisher = Publisher::where('owner_uid', auth()->user()->id)->firstOrFail();
            if ($publisher) {
                app()->instance('pub_id', $publisher->id);
                return $next($request);
            }
        }

    }
}
