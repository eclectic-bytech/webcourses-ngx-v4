<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivityDefaultAnswersTable extends Migration
{
    public function up()
    {
        Schema::create('activity_default_answers', function (Blueprint $table) {

		$table->mediumInteger('aid')->unsigned()->comment('Activity ID');
		$table->mediumtext('answer')->comment('Text or data to be used as the default for an active mode activity');
        $table->index('aid');

        });
    }

    public function down()
    {
        Schema::dropIfExists('activity_default_answers');
    }
}
