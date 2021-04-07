<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {

		$table->increments('id')->unsigned()->comment('Unique activity ID.');
		$table->mediumtext('prequestion')->nullable()->comment('Activity content for the pre-question area.');
		$table->mediumtext('question')->nullable()->comment('Activity content for the question area.');
		$table->mediumtext('assess_text')->nullable()->comment('Activity content for the assess area.');
        $table->mediumtext('after_word')->nullable()->comment('Activity content for the after word area, shown after the activity is completed.');
        $table->timestamps();
        $table->foreign('id')
			->references('activity_id')->on('course_syllabus')
			->onUpdate('cascade')
			->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
