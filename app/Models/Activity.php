<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ActivityMeta;

class Activity extends Model
{
    use HasFactory;

    public function meta() {
        return $this->hasOne(ActivityMeta::class);
    }

    public function answers() {
        return $this->hasMany(Answer::class);
    }

    public function user_answers() {
        return $this->hasMany(UserAnswer::class);
    }

    public function default_answer() {
        return $this->hasOne(ActivityDefaults::class);
    }
}
