<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseSyllabusTable extends Migration
{
    public function up()
    {
        Schema::create('course_syllabus', function (Blueprint $table) {

		$table->increments('activity_id')->unsigned()->comment('Primary activity identifier. ');
        $table->string('activity_type',16)
            ->comment('Defines what type activity this is, per activity_type table');
		$table->mediumInteger('course_id')->unsigned()->comment('Course ID');
        $table->smallInteger('build_id')->unsigned()
            ->comment('Build ID - for now essentially unused.');
        $table->mediumInteger('chapter_id')->unsigned()
            ->comment('chapters table reference id.');
        $table->smallInteger('seq')->unsigned()
            ->comment('Sequence - defines where in the web course the activity is slotted.');
        $table->tinyInteger('marked')->default(1)->unsigned()
            ->comment('1- Multiple option activity will be marked for correct / incorrect answers. 0 just saves choice, marks all selections correct.');
        $table->tinyInteger('cont')->default(0)->unsigned()
            ->comment('0 - Load activity on new page, 1 - Load activity without clearing previous from page.');
        $table->tinyInteger('default_answer')->default(0)->unsigned()
            ->comment('1 if activity has default text / data that the user somehow needs to modify as part of completing the activity.');
        $table->tinyInteger('demo')->default(0)->unsigned()
            ->comment('0 - this activity is not part of the web course\'s free demo. 1 - this activity is.');
        $table->timestamps();
        $table->foreign('chapter_id')
            ->references('id')->on('chapters')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('activity_type')
            ->references('id')->on('activity_types')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('course_id')
            ->references('id')->on('courses')
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('course_syllabus');
    }
}
