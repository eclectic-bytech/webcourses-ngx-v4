<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ActivitytypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('activity_types')->insert([
            'id' => 'checkbox',
            'label' => 'Checkbox',
            'help' => '<p>Select the correct answer(s) and click the <span class="font-weight-bold">Save</span> button.</p><p class="font-weight-bold text-uppercase">Exercise Feedback</p><dl class="row">  <dt class="col-sm-3">Green checkmark</dt>  <dd class="col-sm-9">Correct answer</dd>  <dt class="col-sm-3">Grey checkmark</dt>  <dd class="col-sm-9">Missed correct answer</dd>  <dt class="col-sm-3">Red x</dt>  <dd class="col-sm-9">Wrong answer</dd></dl>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'click',
            'label' => 'Click',
            'help' => '<p>Click or tap to select an item - click or tap it again to deselect it. You may select multiple items. When done click <span class="font-weight-bold">Save</span>.</p>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'click2',
            'label' => 'Click2',
            'help' => '<p>Continue clicking an item until it has the correct punctuation mark.</p>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'custom',
            'label' => 'Custom Activity',
            'help' => '<p>No additional help available for this activity.</p>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'dnd',
            'label' => 'Drag-n-Drop',
            'help' => '<p>Drag items into their correct position.</p>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'dnd-match',
            'label' => 'Drag-n-Drop Match',
            'help' => '<p>Drag items into their correct position.</p>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'info',
            'label' => 'Info',
            'help' => '<p>Read the activity. Click <span class="font-text-bold">Mark Read</span> or <span class="font-text-bold">Next</span> to continue.</p>'
        ]);
        DB::table('activity_types')->insert([
            'id' => 'radio',
            'label' => 'Radio',
            'help' => '<p>Select the correct answer and click the \'Save\' button.</p><p class="font-weight-bold text-uppercase"><u>Exercise Feedback</u></p><dl class="row">  <dt class="col-sm-4">Green checkmark</dt>  <dd class="col-sm-8">Correct answer</dd>  <dt class="col-sm-4">Grey checkmark</dt>  <dd class="col-sm-8">Missed correct answer</dd>  <dt class="col-sm-4">Red x</dt>  <dd class="col-sm-8">Wrong answer</dd></dl>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'text',
            'label' => 'Text (unmarked)',
            'help' => '<p>Read the instructions in the activity. Write your answer in the text box and click <span class="font-weight-bold">Save</span>.</p>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'textarea',
            'label' => 'Textarea (unmarked)',
            'help' => '<p>Read the instructions in the activity. Write your answer in the text box and click <span class="font-weight-bold">Save</span>.</p>'
        ]);

        DB::table('activity_types')->insert([
            'id' => 'special',
            'label' => 'Special',
            'help' => '<p>No additional help available for this activity.</p>'
        ]);
    }
}
