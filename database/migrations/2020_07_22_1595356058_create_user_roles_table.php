<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRolesTable extends Migration
{
    public function up()
    {
        Schema::create('user_roles', function (Blueprint $table) {

		$table->mediumIncrements('id')->unsigned();
		$table->bigInteger('user_id')->unsigned();
		$table->tinyInteger('role_id')->unsigned();
        $table->foreign('user_id')
			->references('id')->on('users')
			->onUpdate('cascade')
            ->onDelete('cascade');
        $table->foreign('role_id')
			->references('id')->on('roles')
			->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_roles');
    }
}
