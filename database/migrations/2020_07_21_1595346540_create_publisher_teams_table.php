<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublisherTeamsTable extends Migration
{
    public function up()
    {
        Schema::create('publisher_teams', function (Blueprint $table) {

        $table->mediumInteger('publisher_id')->unsigned();
		$table->bigInteger('uid')->unsigned();
        $table->timestamps();
		$table->primary(['publisher_id','uid']);
        $table->foreign('publisher_id')
			->references('id')->on('publishers')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('uid')
			->references('id')->on('users')
			->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('publisher_teams');
    }
}
