import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class WebcourseService {

  public waitingForApi = false
  public endOfChapter = false
  public endOfCourse = false
  public builderMode = false

  constructor(
  ) {}

}
