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
            'id_alias' => 'default',
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

        DB::table('publishers')->insert([
            'id_alias' => 'acme',
            'owner_uid' => 2,
            'name' => 'ACME Company',
            'website' => 'https://www.example.com',
            'contact_fname' => 'Road',
            'contact_lname' => 'Runner',
            'contact_email' => 'runner@example.com',
            'contact_phone' => '800-EAT-DIRT',
            'country' => 'USA',
            'province' => 'NV',
            'city' => 'Village',
            'settings' => '{}',
            'created_at' => '2021-06-18 15:17:37',
            'updated_at' => NULL
        ]);
    }
}
