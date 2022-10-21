<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('publishers')->insert([
            'id' => 1,
            'owner_uid' => 1,
            'name' => 'Open WebCourses',
            'website' => 'https://www.webcourses.io',
            'contact_fname' => 'Slawomir',
            'contact_lname' => 'Borkowski',
            'contact_email' => 'welcome@webcourses.io',
            'contact_phone' => '204-410-2234',
            'country' => 'Canada',
            'province' => 'MB',
            'city' => 'Winnipeg',
            'settings' => '{}',
            'created_at' => '2021-06-18 15:17:37',
            'updated_at' => NULL
        ]);
    }
}
