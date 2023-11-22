<?php

namespace App\Services\PublisherServices;

use App\Services\PublisherServices\ChapterPublisherService;
use App\Services\PublisherServices\ActivityPublisherService;
use App\Services\PublisherServices\CourseSyllabusPublisherService;

use App\Models\Course;

class CoursePublisherService {

    protected $chapterPublisherService;
    protected $activityPublisherService;
    protected $courseSyllabusPublisherService;

    public function __construct(
        ChapterPublisherService $chapterPublisherService,
        ActivityPublisherService $activityPublisherService,
        CourseSyllabusPublisherService $courseSyllabusPublisherService
    ) {
        $this->chapterPublisherService = $chapterPublisherService;
        $this->activityPublisherService = $activityPublisherService;
        $this->courseSyllabusPublisherService = $courseSyllabusPublisherService;
    }

    public function storeCourse($courseDetails)
    {
        // $course = validate_course_data($input);
        $course = new Course();

        $course->active_bid = 1;
        $course->title = $courseDetails['title'];
        $course->publisher_id = resolve('pub_id');
        $course->published = 0;
        $course->private = $courseDetails['private'] ? 1 : 0;
        $course->hide_from_main_catalogue = 0;
        $course->completion_time = 1;
        $course->audience = $courseDetails['audience'];
        $course->short_desc = $courseDetails['short_desc'];
        $course->long_desc = $courseDetails['long_desc'];
        $course->objective = $courseDetails['objective'];
        $course->eval_type = $courseDetails['eval_type'];
        $course->price = $courseDetails['price'] * 100;
        $course->cover = 'default';

        $course->save();

        $this->initNewCourse($course->id);

        return $course->id;
    }

    public function initNewCourse(int $cid) {
        $chid = $this->chapterPublisherService->storeChapter();
        $aid = $this->activityPublisherService->storeActivity();
        $csid = $this->courseSyllabusPublisherService->storeCourseSyllabus($cid, $chid, $aid, 1);
    }
}
