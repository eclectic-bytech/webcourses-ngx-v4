import { Injectable } from '@angular/core'

// WNGX services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

// WNGX models and misc
import { Router } from '@angular/router'
import { ActivitiesService } from '../../activities.service'

@Injectable({
  providedIn: 'root'
})

export class NavService {

  constructor(
    private router: Router,
    public selectedCourseService: SelectedCourseService,
    private activitiesService: ActivitiesService
  ) { }

  NavigateByAid(aid: number) {
    this.activitiesService.waitingForApi = true
    this.router.navigateByUrl(`/webcourse/activities/${aid}`)
  }

}
