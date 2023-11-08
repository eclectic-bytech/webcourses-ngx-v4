<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Models\CourseSyllabus;
use App\Models\UserProgress;

class IsStudent
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $activityMeta = CourseSyllabus::where('activity_id', $request->route('activity'))->firstOrFail();

        if ($activityMeta)
        {
            $pid = UserProgress::where('user_id', resolve('uid'))
                ->where('course_id', $activityMeta->course_id)
                ->firstOrFail()->id;

            if ($pid)
            {
                app()->instance('pid', $pid);
                app()->instance('activityMeta', $activityMeta);
                return $next($request);
            }
        }

    }
}
