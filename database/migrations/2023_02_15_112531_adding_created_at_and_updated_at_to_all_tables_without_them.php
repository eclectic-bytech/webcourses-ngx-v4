<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_defaults', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('id');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('activity_default_answers', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('answer');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('activity_types', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('help');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('failed_jobs', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('failed_at');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('migrations', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('batch');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('password_resets', function (Blueprint $table) {
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('roles', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('title');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('sessions', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('last_activity');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('user_long_answers', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('answer');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
        Schema::table('user_roles', function (Blueprint $table) {
            $table->timestamp('created_at')->nullable()->default(NULL)->after('role_id');
            $table->timestamp('updated_at')->nullable()->default(NULL)->after('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//
    }
};
