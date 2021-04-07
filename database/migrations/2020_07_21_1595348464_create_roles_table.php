<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRolesTable extends Migration
{
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {

		$table->tinyIncrements('id')->unsigned();
		$table->string('title', 255);

        });
    }

    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
