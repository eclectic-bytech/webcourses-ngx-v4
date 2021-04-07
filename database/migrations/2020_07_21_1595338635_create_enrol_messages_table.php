<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnrolMessagesTable extends Migration
{
    public function up()
    {
        Schema::create('enrol_messages', function (Blueprint $table) {
        $table->mediumIncrements('id')->unsigned();
		$table->mediumText('message');
        $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('enrol_messages');
    }
}
