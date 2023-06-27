<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('activity_bookmarks', function (Blueprint $table) {
            $table->dropForeign('wngx_activity_bookmarks_chid_foreign');
            $table->dropColumn(['auto', 'generated','chid']);
            $table->renameColumn('description', 'label');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
