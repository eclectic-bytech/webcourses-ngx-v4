<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemocourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('courses')->insert([
            'id' => 1,
            'active_bid' => 1,
            'title' => 'Open WebCourses Platform: Introduction',
            'cover' => 'cover.png',
            'publisher_id' => 2,
            'published' => 1,
            'private' => 0,
            'completion_time' => 0.5,
            'audience' => 'Educators, and learners passionate about online learning',
            'cover_alt' => 'Open WebCourses logo - three rings forming a triangle, and platform name arranged into a skeleton key shape.',
            'short_desc' => 'A quick overview of some key features of the Open WebCourses learning platform. Free access code and details at <a href="https://www.webcourses.io/demo" target="_blank">webcourses.io</a>.',
            'long_desc' => NULL,
            'objective' => '<p>Introduce and highlight features of the open source online learning platform.</p>',
            'eval_type' => 'Online',
            'price' => 1000,
            'created_at' => '2020-05-29 14:30:20',
            'updated_at' => '2021-07-26 07:32:43'
        ]);

        DB::table('chapters')->insert([
            'id' => 309,
            'label' => 'Introduction',
            'created_at' => NULL,
            'updated_at' => NULL
        ]);

        DB::table('chapters')->insert([
            'id' => 322,
            'label' => 'Learn through interaction',
            'created_at' => '2021-06-28 15:20:39',
            'updated_at' => NULL
        ]);

        DB::table('chapters')->insert([
            'id' => 323,
            'label' => 'Feature Highlights',
            'created_at' => '2021-06-30 13:13:54',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 3964,
            'activity_type' => 'info',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 309,
            'seq' => 0,
            'marked' => 0,
            'cont' => 0,
            'default_answer' => 0,
            'style' => '',
            'demo' => 0,
            'created_at' => NULL,
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4764,
            'activity_type' => 'info',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 309,
            'seq' => 1,
            'marked' => 0,
            'cont' => 0,
            'default_answer' => 0,
            'style' => '',
            'demo' => 0,
            'created_at' => '2021-06-22 16:25:00',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4765,
            'activity_type' => 'click',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 3,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 0,
            'style' => 'image',
            'demo' => 0,
            'created_at' => '2021-06-25 16:12:18',
            'updated_at' => '2021-06-28 16:17:44'
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4766,
            'activity_type' => 'info',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 2,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-28 20:27:23',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4767,
            'activity_type' => 'radio',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 4,
            'marked' => 1,
            'cont' => 1,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-28 20:41:06',
            'updated_at' => '2021-06-28 16:20:47'
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4768,
            'activity_type' => 'click',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 5,
            'marked' => 1,
            'cont' => 1,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-28 21:03:17',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4769,
            'activity_type' => 'info',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 6,
            'marked' => 1,
            'cont' => 1,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-28 21:50:18',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4770,
            'activity_type' => 'radio',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 7,
            'marked' => 0,
            'cont' => 0,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-29 12:55:14',
            'updated_at' => '2021-07-18 12:20:09'
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4771,
            'activity_type' => 'text',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 8,
            'marked' => 1,
            'cont' => 1,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-29 13:18:05',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4772,
            'activity_type' => 'textarea',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 9,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-29 14:45:30',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4773,
            'activity_type' => 'textarea',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 10,
            'marked' => 1,
            'cont' => 1,
            'default_answer' => 2,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-29 14:54:58',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4774,
            'activity_type' => 'textarea',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 11,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 1,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-29 15:05:09',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4775,
            'activity_type' => 'info',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 323,
            'seq' => 14,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-29 18:02:24',
            'updated_at' => '2021-07-13 16:24:22'
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4776,
            'activity_type' => 'info',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 323,
            'seq' => 15,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-29 18:36:13',
            'updated_at' => '2021-07-13 16:24:22'
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4777,
            'activity_type' => 'dnd',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 12,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-30 18:24:34',
            'updated_at' => NULL
        ]);

        DB::table('course_syllabus')->insert([
            'activity_id' => 4778,
            'activity_type' => 'dnd-match',
            'course_id' => 1,
            'build_id' => 1,
            'chapter_id' => 322,
            'seq' => 13,
            'marked' => 1,
            'cont' => 0,
            'default_answer' => 0,
            'style' => NULL,
            'demo' => 0,
            'created_at' => '2021-06-30 20:15:29',
            'updated_at' => '2021-07-13 16:24:23'
        ]);

        DB::table('activities')->insert([
            'id' => 3964,
            'prequestion' => '<img src="/publisher-files/default/courses/1/images/logo.svg" height="100" alt="Open WebCourses Logo" class="d-block mx-auto mt-5"><hr><div class="h3 my-4 text-center">  <p>An open source web course platform</p>  <p class="text-uppercase mt-2">Overview</p></div><p class="mb-3 mt-5 text-center text-secondary">  <small>Join in <a href="https://www.webcourses.io/funding" target="_blank">partnership or sponsor</a> Open WebCourses.</small></p><p class="mb-3 mt-5 text-center text-uppercase text-secondary">  Partners and sponsors  <div class="d-block text-center">    <a href="https://www.eclectic.ca" target="_blank">      <img src="/publisher-files/default/courses/1/images/eclectic_logo.svg" alt="Eclectic Communications" height="40" class="img-responsive mx-3">    </a>    <a href="https://www.bytech.ca/" target="_blank">      <img src="/publisher-files/default/courses/1/images/bytech_logo.svg" alt="Bytech" height="40" class="img-responsive mx-3">    </a>  </div></p>',
            'question' => NULL,
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-06-22 10:17:54',
            'updated_at' => '2021-06-22 11:09:43'
        ]);

        DB::table('activities')->insert([
            'id' => 4764,
            'prequestion' => '<p class="h4 my-3">Engaging, interactive user experience</p><div class="card-columns">  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Checkbox</h5>      <p class="card-text">Multiple choice. No selection required, or, select one through all options.</p>      <p class="card-text"><small class="text-muted">Category: Multiple choice</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Radio Button</h5>      <p class="card-text">Multiple choice. Requires one selection. Changing selection automatically unchecks previous.</p>      <p class="card-text"><small class="text-muted">Category: Multiple choice</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Click</h5>      <p class="card-text">        Has features of checkbox activity type, with customised presentation:        it replaces checkboxes\' traditional selection list with cards, images, or other selectable items.</p>      <p class="card-text"><small class="text-muted">Category: Multiple choice</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Click 2</h5>      <p class="card-text">        With Click 2, when a selectable item is clicked, the option rotates to another.         </p>      <p class="card-text"><small class="text-muted">Category: Multiple choice array</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Drag and Drop</h5>      <p class="card-text">        Re-arrange items into a sequence by dragging and dropping them.        </p>      <p class="card-text"><small class="text-muted">Category: Sequences</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Drag and Drop Match</h5>      <p class="card-text">        Pair up items across rows or columns.        </p>      <p class="card-text"><small class="text-muted">Category: Other</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Informational</h5>      <p class="card-text">        The only activity type that does not require interaction. Student reads the text and marks the activity as read.        </p>      <p class="card-text"><small class="text-muted">Category: Informational</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Text</h5>      <p class="card-text">        Captures user input on a single-line text box.      </p>      <p class="card-text"><small class="text-muted">Category: Short answer</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Textarea</h5>      <p class="card-text">        Captures user input in a multi-line text box.      </p>      <p class="card-text"><small class="text-muted">Category: Long answer</small></p>    </div>  </div>  <div class="card">    <!-- <img class="card-img-top" src="/publisher-files/default/courses/1/images/4764.png" alt="Card image cap"> -->    <div class="card-body">      <h5 class="card-title">Custom type</h5>      <p class="card-text">        Increase variety by embedding any type of activity from a library or other source.      </p>      <p class="card-text"><small class="text-muted">Category: Custom</small></p>    </div>  </div></div><p>Open WebCourses does not rely on difficult to maintain and passive-experience videos for content delivery.</p>',
            'question' => NULL,
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-06-22 11:26:13',
            'updated_at' => '2021-06-25 05:09:10'
        ]);

        DB::table('activities')->insert([
            'id' => 4765,
            'prequestion' => '<p>Let us start with a multiple choice question that has one correct answer.</p>',
            'question' => 'Select the planet that is closest to our sun.',
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-06-25 11:14:23',
            'updated_at' => '2021-06-28 11:20:45'
        ]);

        DB::table('activities')->insert([
            'id' => 4766,
            'prequestion' => '<p class="h4 my-3">Learn through interaction</p><p>In this chapter you\'ll experience the activity types available in Open WebCourses. Each can be customised to varying degrees through custom styles. Today we\'ll use the defaults and no customisations to give you an overview of what you can expect out of the box.</p>',
            'question' => NULL,
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-06-28 11:20:44',
            'updated_at' => '2021-06-28 11:20:45'
        ]);

        DB::table('activities')->insert([
            'id' => 4767,
            'prequestion' => '<p class="mt-4">Here is the same activity but using a traditional form with radio buttons and no images.</p>',
            'question' => 'Select the planet that is closest to our sun.',
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-06-28 11:20:46',
            'updated_at' => '2021-06-28 11:20:49'
        ]);

        DB::table('activities')->insert([
            'id' => 4768,
            'prequestion' => '<p class="mt-4">And a text only option that might better suit certain scenarios.</p>',
            'question' => 'Select the planet that is closest to our sun.',
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-06-28 11:20:48',
            'updated_at' => '2021-06-28 11:20:49'
        ]);
        DB::table('activities')->insert([
            'id' => 4769,
            'prequestion' => '<p class="mt-4">Some activities benefit from the context of activities that came before. This info-type and read only activity is the fourth in this sequence, but we could have just as easily loaded it and the others solo, by clearing preceding activities off the screen.</p>',
            'question' => NULL,
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-06-28 11:20:50',
            'updated_at' => NULL
        ]);

        DB::table('activities')->insert([
            'id' => 4770,
            'prequestion' => '<p>The multiple choice activities this far were marked. Marked activities keep score of number of correct, wrong and missed correct answers. Sometimes it makes sense to provide multiple options without marking any as correct.</p>',
            'question' => 'Which is your favourite planet?',
            'assess_text' => NULL,
            'after_word' => 'Since there is no right or wrong answer in this case, your choice was recorded and your score remains unaffected. This explanation here is the above activity\'s after word: it shows up immediatelly after an activity is completed.',
            'created_at' => '2021-07-13 11:24:01',
            'updated_at' => '2021-07-13 11:24:04'
        ]);

        DB::table('activities')->insert([
            'id' => 4771,
            'prequestion' => '<p class="mt-4">Tell me a bit more about your selection.</p>',
            'question' => 'What makes it your favourite planet?',
            'assess_text' => NULL,
            'after_word' => 'Obviously there is no right or wrong choice, but I think selecting anything other than Earth is a currious choice. &#128540;',
            'created_at' => '2021-07-13 11:24:05',
            'updated_at' => '2021-07-13 11:24:05'
        ]);

        DB::table('activities')->insert([
            'id' => 4772,
            'prequestion' => '<p>Sometimes a larger area for text is handy. Here is one.</p>',
            'question' => 'What music albums would you take with you to a desert island if you could take only three?',
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-07-13 11:24:06',
            'updated_at' => NULL
        ]);

        DB::table('activities')->insert([
            'id' => 4773,
            'prequestion' => '<p class="mt-4">A user\'s long answer can be loaded from earlier activities.</p>',
            'question' => 'What if you could take five albums? Would you simply add two more to the list, or change you choices in some way?',
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-07-13 11:24:07',
            'updated_at' => NULL
        ]);

        DB::table('activities')->insert([
            'id' => 4774,
            'prequestion' => '<p class="mt-4">Another option is to include default text that the user can then edit.</p>',
            'question' => 'Rewrite the order of planets in order starting with the one closes to the sun.',
            'assess_text' => NULL,
            'after_word' => '<p>The correct order is: <strong>M</strong>ercury, <strong>V</strong>enus, <strong>E</strong>arth, <strong>M</strong>ars, <strong>J</strong>upiter, <strong>S</strong>aturn, <strong>U</strong>ranus, <strong>N</strong>eptune.</p><p>Trouble remembering the order? Remeber this acronym: <br><strong>M</strong>y <strong>v</strong>ery <strong>e</strong>asy <strong>m</strong>ethod <strong>j</strong>ust <strong>s</strong>peeds <strong>u</strong>p <strong>n</strong>aming planets.</p>',
            'created_at' => '2021-07-13 11:24:08',
            'updated_at' => '2021-07-13 11:24:10'
        ]);

        DB::table('activities')->insert([
            'id' => 4775,
            'prequestion' => '<p>Open WebCourses courses are designed to be easy to update and maintain. The platform does not rely on videos, but they can be added.</p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/32kYH6XZrIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            'question' => NULL,
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-07-13 11:24:10',
            'updated_at' => '2021-07-13 11:24:11'
        ]);

        DB::table('activities')->insert([
            'id' => 4776,
            'prequestion' => '<p class="mb-4">Through the use of iFrames, we can include a great variety of content. Included in this activity is live currency exchange data.</p><iframe src="https://fxpricing.com/fx-widget/market-currency-rates-widget.php?id=410,1,39,13&click_target=blank&theme=light&flags=flags-circle&value_alignment=center&column=price,chg,chg_per,spread,time" width="100%" height="300" style="border: 1px solid #eee;"></iframe><div id="fx-pricing-widget-copyright"><span>Powered by </span><a href="https://fxpricing.com/" target="_blank">FX Pricing</a></div><style type="text/css">#fx-pricing-widget-copyright{text-align: center; font-size: 13px; font-family: sans-serif; margin-top: 10px; margin-bottom: 10px; color: #9db2bd;} #fx-pricing-widget-copyright a{text-decoration: unset; color: #bb3534; font-weight: 600;}</style>',
            'question' => NULL,
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-07-13 11:24:12',
            'updated_at' => '2021-07-13 11:24:12'
        ]);

        DB::table('activities')->insert([
            'id' => 4777,
            'prequestion' => '<p>Let\'s take a break from questions about planets, and move on to maths. Something easy.</p>',
            'question' => 'Arrange the numbers from lowest to heighest.',
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-07-13 11:24:17',
            'updated_at' => '2021-07-13 11:24:18'
        ]);

        DB::table('activities')->insert([
            'id' => 4778,
            'prequestion' => '<p>From maths to animals. If you don\'t know the answers, asks your children. What does the fox say?</p>',
            'question' => 'Drag and drop the sounds to match them up with animals.',
            'assess_text' => NULL,
            'after_word' => NULL,
            'created_at' => '2021-07-13 11:24:23',
            'updated_at' => '2021-07-13 11:24:28'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4765,
            'slot' => 1,
            'caption' => '{"src":"/publisher-files/default/courses/1/images/planets/mercury.png", "alt":"Mercury"}',
            'correct' =>1,
            'created_at' => '2021-06-25 12:51:36',
            'updated_at' => '2021-06-28 04:25:55'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4765,
            'slot' => 2,
            'caption' => '{"src":"/publisher-files/default/courses/1/images/planets/earth.png", "alt":"Earth"}',
            'correct' => 0,
            'created_at' => '2021-06-25 13:14:38',
            'updated_at' => '2021-06-28 04:25:57'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4765,
            'slot' => 3,
            'caption' => '{"src":"/publisher-files/default/courses/1/images/planets/mars.png","alt":"Mars"}',
            'correct' => 0,
            'created_at' => '2021-06-25 13:16:38',
            'updated_at' => '2021-06-28 04:25:57'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4765,
            'slot' => 4,
            'caption' => '{"src":"/publisher-files/default/courses/1/images/planets/venus.png","alt":"Venus"}',
            'correct' => 0,
            'created_at' => '2021-06-26 10:37:58',
            'updated_at' => '2021-06-28 04:25:56'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4767,
            'slot' => 1,
            'caption' => 'Mercury',
            'correct' => 1,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4767,
            'slot' => 2,
            'caption' => 'Earth',
            'correct' => 0,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4767,
            'slot' => 3,
            'caption' => 'Mars',
            'correct' => 0,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4767,
            'slot' => 4,
            'caption' => 'Venus',
            'correct' => 0,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4768,
            'slot' => 1,
            'caption' => 'Mercury',
            'correct' => 1,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4768,
            'slot' => 2,
            'caption' => 'Earth',
            'correct' => 0,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);
        DB::table('activity_answers')->insert([
            'activity_id' => 4768,
            'slot' => 3,
            'caption' => 'Mars',
            'correct' => 0,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4768,
            'slot' => 4,
            'caption' => 'Venus',
            'correct' => 0,
            'created_at' => '2021-06-28 15:43:56',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4770,
            'slot' => 1,
            'caption' => 'Mercury',
            'correct' => 0,
            'created_at' => '2021-06-29 08:05:14',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4770,
            'slot' => 2,
            'caption' => 'Earth',
            'correct' => 0,
            'created_at' => '2021-06-29 08:05:14',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4770,
            'slot' => 3,
            'caption' => 'Mars',
            'correct' => 0,
            'created_at' => '2021-06-29 08:05:14',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4770,
            'slot' => 4,
            'caption' => 'Venus',
            'correct' => 0,
            'created_at' => '2021-06-29 08:05:14',
            'updated_at' => NULL
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4777,
            'slot' => 1,
            'caption' => '21',
            'correct' => 3,
            'created_at' => '2021-06-30 13:30:46',
            'updated_at' => '2021-07-18 06:03:40'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4777,
            'slot' => 2,
            'caption' => '15',
            'correct' => 2,
            'created_at' => '2021-06-30 13:30:46',
            'updated_at' => '2021-07-18 06:03:37'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4777,
            'slot' => 3,
            'caption' => '1',
            'correct' => 0,
            'created_at' => '2021-06-30 13:30:46',
            'updated_at' => '2021-07-18 06:03:30'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4777,
            'slot' => 4,
            'caption' => '4',
            'correct' => 1,
            'created_at' => '2021-06-30 13:30:46',
            'updated_at' => '2021-07-18 06:03:32'
        ]);
        DB::table('activity_answers')->insert([
            'activity_id' => 4778,
            'slot' => 1,
            'caption' => '{"static":"Dog", "sortable":"Meow"}',
            'correct' => 2,
            'created_at' => '2021-06-30 15:30:01',
            'updated_at' => '2021-07-13 11:24:28'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4778,
            'slot' => 2,
            'caption' => '{"static":"Road Runner", "sortable":"Woof"}',
            'correct' => 0,
            'created_at' => '2021-06-30 15:30:01',
            'updated_at' => '2021-07-13 11:24:28'
        ]);

        DB::table('activity_answers')->insert([
            'activity_id' => 4778,
            'slot' => 3,
            'caption' => '{"static":"Cat", "sortable":"Beep Beep"}',
            'correct' => 1,
            'created_at' => '2021-06-30 15:30:01',
            'updated_at' => '2021-07-13 11:24:27'
        ]);

        DB::table('activity_defaults')->insert([
            'activity_id' => 4773,
            'source' => 2,
            'id' => 4772
        ]);

        DB::table('activity_defaults')->insert([
            'activity_id' => 4774,
            'source' => 1,
            'id' => 3
        ]);

        DB::table('activity_default_answers')->insert([
            'answer' => 'Mercury, Venus, Mars, Earth, Jupiter, Saturn, Uranus, Neptune'
        ]);

    }
}
