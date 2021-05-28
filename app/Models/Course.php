<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $hidden = ['active_bid', 'published', 'private'];

    public function publisher() {
        return $this->hasOne(Publisher::class, 'id', 'publisher_id');

    }
}
