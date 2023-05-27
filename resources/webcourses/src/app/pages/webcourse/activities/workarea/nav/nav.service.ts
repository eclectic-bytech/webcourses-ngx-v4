import { Injectable } from '@angular/core'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { WebcourseService } from '../../../webcourse.service'

// WNGX models and misc
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class NavService {

  constructor(
    private router: Router,
    public webcourseService: WebcourseService,
    public selectedCourseService: SelectedCourseService,
  ) { }

  NavigateByAid(aid: number) {
    this.webcourseService.waitingForApi = true
    this.router.navigateByUrl(`/webcourse/activities/${aid}`)
  }

}
