<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LoginListener
{
    public function handle($event)
    {
        $event->user->update([
            'last_login_time' => now(),
            'last_login_ip' => request()->GetClientIp(),
            'login_count' => $event->user->increment('login_count')
        ]);
    }
}
