<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChaptersTable extends Migration
{
    public function up()
    {
        Schema::create('chapters', function (Blueprint $table) {

		$table->mediumInteger('id')->unsigned()->comment('Unique machine chapter ID');
		$table->string('label',256)->comment('Human friend chapter title');
        $table->timestamps();
		$table->primary('id');

        });
    }

    public function down()
    {
        Schema::dropIfExists('chapters');
    }
}
