<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserLongAnswersFkUserAnswers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // COMMENTED OUT - IT CAUSES SAVE PROBLEMS ON LONG ANSWER ACTIVITIES.
        // LIKELY, _user_answers RECORD WILL NEED TO BE CREATED.
        // THEN _user_long_answers WITH ID OF _user_answers RECORDS AS answer_id.
        // THEN, _user_long_answers WILL NEED TO BE UPDATED WITH _user_long_answers.id

        // Schema::table('user_long_answers', function (Blueprint $table) {
        //     $table->foreign('id')->references('answer_id')->on('user_answers')
        //         ->onUpdate('cascade')
        //         ->onDelete('cascade');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
