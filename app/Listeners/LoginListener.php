<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\UserRole;

class LoginListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $event->user->update([
            $user_roles = UserRole::where('user_id', $event->user->id)->get(),
            'user_roles' => $user_roles->pluck('role_id')->all(),
            'last_login_time' => now(),
            'last_login_ip' => request()->GetClientIp(),
            'login_count' => $event->user->increment('login_count')
        ]);
    }
}
