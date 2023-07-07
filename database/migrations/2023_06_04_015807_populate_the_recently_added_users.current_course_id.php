<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;
use App\Models\UserAnswer;
use App\Models\UserProgress;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $userProgresses = UserProgress::all();

            foreach ($userProgresses as $userProgress){
            $ccid = null;
            $user = null;

            $userAnswer = UserAnswer::where('progress_id', $userProgress->id)->orderBy('created_at', 'ASC')->first();
                    $user = User::where('id', $userProgress->user_id)->first();
                    if (!!$user){
                        $ccid = $userProgress->course_id;
                        $user->current_course_id = $ccid;
                        $user->save();
                    }
            }
        }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
