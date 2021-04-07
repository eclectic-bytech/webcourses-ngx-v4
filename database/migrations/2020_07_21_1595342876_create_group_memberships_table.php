<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupMembershipsTable extends Migration
{
    public function up()
    {
        Schema::create('group_memberships', function (Blueprint $table) {

		$table->mediumInteger('gid')->unsigned();
		$table->bigInteger('uid')->unsigned();
        $table->timestamps();
        $table->primary(['gid','uid']);
        $table->foreign('gid')
			->references('gid')->on('groups')
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
        Schema::dropIfExists('group_memberships');
    }
}
