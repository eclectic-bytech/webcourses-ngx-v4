import { Injectable } from '@angular/core'
import { Course } from 'src/app/models/course.model'

@Injectable({
  providedIn: 'root'
})

export class AccessCodeModalService {
  public course: Course
  constructor() { }
}
