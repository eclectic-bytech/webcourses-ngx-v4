<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{

    use HasFactory;
    // Once you rename the table to "bookmarks", you can get rid of the next line.
    protected $table = 'activity_bookmarks';

}
