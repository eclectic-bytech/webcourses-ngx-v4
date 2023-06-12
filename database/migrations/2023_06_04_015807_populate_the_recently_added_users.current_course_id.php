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
        $userAnswers = UserAnswer::orderBy('created_at', 'ASC')->get();
        $userProgresses = UserProgress::all();

        foreach ($userAnswers as $userAnswer) {
            $ccid = null;
            $pid = $userAnswer->progress_id;
            $user = null;

            foreach ($userProgresses as $userProgress) {
                if ($pid === $userProgress->id) {
                    $user = User::where('id', $userProgress->user_id)->first();
                    $ccid = $userProgress->course_id;
                    $user->current_course_id = $ccid;
                    $user->save();
                }
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
