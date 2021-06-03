<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $hidden = ['active_bid', 'published', 'private'];

    public function publisher() {
        return $this->belongsTo(Publisher::class);
    }

    public function theme() {
        return $this->hasOne(Theme::class, 'publisher_id', 'publisher_id');
    }
}
