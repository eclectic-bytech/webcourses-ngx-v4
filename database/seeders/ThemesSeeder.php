<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ThemesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('themes')->insert([
            'publisher_id' => 1,
            'label' => 'Webcourses.IO',
            'path' => 'webcourses_io',
            'bootstrap_nav' => 'navbar-dark',
            'created_at' => now()
        ]);

        DB::table('themes')->insert([
            'publisher_id' => 2,
            'label' => 'Cultivate Learning',
            'path' => 'cultivate',
            'bootstrap_nav' => 'navbar-dark',
            'created_at' => now()
        ]);
    }
}
