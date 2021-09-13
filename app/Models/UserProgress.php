<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserAnswer;

class UserProgress extends Model
{
    use HasFactory;
    protected $appends = ['total_activities_completed'];

    public function getTotalActivitiesCompletedAttribute() {
        return $this
            ->hasMany(UserAnswer::class, 'progress_id')
            ->distinct('activity_id')
            ->count()
        ;
    }
}
