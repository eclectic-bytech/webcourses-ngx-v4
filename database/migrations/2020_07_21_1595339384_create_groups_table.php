<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGroupsTable extends Migration
{
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {

        $table->mediumInteger('cid')->unsigned()
            ->comment('Course ID to which this group is attached.');
		$table->mediumInteger('gid')->unsigned()->comment('Group ID');
        $table->string('label',128)->comment('Group name');
        $table->mediumInteger('enrol_msg_id')->unsigned()->nullable()
            ->comment('ID of enrol message in enrol_messages (displayed after user joins course using a code.)');
		$table->string('icon',256)->nullable()->default('NULL')->comment('Path to group avatar.');
		$table->string('desc',256)->nullable()->default('NULL');
        $table->timestamps();
        $table->primary(['gid','cid']);
        $table->foreign('cid')
			->references('id')->on('courses')
			->onUpdate('cascade')
			->onDelete('cascade');
        $table->foreign('enrol_msg_id')->references('id')->on('enrol_messages');
        });
    }

    public function down()
    {
        Schema::dropIfExists('groups');
    }
}
