<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserProgressTable extends Migration
{
    public function up()
    {
        Schema::create('user_progress', function (Blueprint $table) {

        $table->increments('id')->unsigned();
		$table->bigInteger('user_id')->unsigned();
		$table->mediumInteger('course_id')->unsigned();
        $table->smallInteger('build_id')->unsigned()
            ->comment('Version / build number of the web course the user has joined');
        $table->smallInteger('correct')->unsigned()->default('0')
            ->comment('Number of correct selections the user has made. PROBABLY SHOULD BE MOVED ELSEWHERE.');
		$table->smallInteger('wrong')->unsigned()->default('0')
            ->comment('Number of wrong selections the user has made. PROBABLY SHOULD BE MOVED ELSEWHERE.');
		$table->smallInteger('missed')->unsigned()->default('0')
            ->comment('Number of missed correct selections the user has made. PROBABLY SHOULD BE MOVED ELSEWHERE.');
        $table->timestamps();
        $table->tinyInteger('demo')->unsigned();
        $table->foreign('course_id')
			->references('id')->on('courses')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('user_id')
			->references('id')->on('users')
			->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_progress');
    }
}
