<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('teams')->insert([
            'user_id' => 1,
            'name' => 'Administrators',
            'personal_team' => 1
        ]);

        DB::table('teams')->insert([
            'user_id' => 1,
            'name' => 'Publishers',
            'personal_team' => 0
        ]);
    }
}
