<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserprogressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_progress')->insert([
            'user_id' => '1',
            'course_id' => '1',
            'build_id' => '1',
            'created_at' => '2022-01-23 14:38:23',
            'demo' => '0'
        ]);

        DB::table('user_progress')->insert([
            'user_id' => '1',
            'course_id' => '2',
            'build_id' => '1',
            'created_at' => '2022-01-23 14:38:23',
            'demo' => '0'
        ]);
    }
}
