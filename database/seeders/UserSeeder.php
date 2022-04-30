<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Super Admin',
            'email' => 'example@example.com',
            'password' => Hash::make('password'),
            'current_team_id' => 1
        ]);

        DB::table('team_user')->insert([
            'team_id' => '1',
<<<<<<< HEAD
            'role' => 'test',
=======
            'role' => 'Admin role.',
>>>>>>> master
            'user_id' => '1'
        ]);
    }
}
