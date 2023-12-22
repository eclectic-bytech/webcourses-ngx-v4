import { Injectable } from '@angular/core'
import { Course } from 'src/app/models/course.model'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  coverImage(course: Course) {
    return (course.cover === 'default') ?
      'assets/cl-logo.png' :
      `publisher-files/${course.publisher_id}/courses/${course.id}/images/${course.cover}`
  }
}
