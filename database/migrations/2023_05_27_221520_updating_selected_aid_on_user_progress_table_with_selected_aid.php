<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\UserProgress;
use App\Models\UserAnswer;
use App\Models\CourseSyllabus;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $userProgresses = UserProgress::all();
        $userAnswers = UserAnswer::all();
        $courseSyllabuses = CourseSyllabus::all();

        foreach ($userProgresses as $userProgress) {
            $pid = $userProgress->id;
            $proid = null;

            foreach ($userAnswers as $userAnswer) {
                if ($userAnswer->progress_id === $pid) {
                    if ($userAnswer->activity_id > $proid){
                        $proid = $userAnswer->activity_id;
                    }
                }
            }

            if ($proid === null) {
                $upccid = $userProgress->course_id;

                foreach ($courseSyllabuses as $courseSyllabus) {
                    if ($courseSyllabus->course_id === $upccid && $courseSyllabus->seq === 0) {
                        $proid = $courseSyllabus->activity_id;
                        break;
                    }
                }
            }

            $userProgress->selected_aid  = $proid;
            $userProgress->save();
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

