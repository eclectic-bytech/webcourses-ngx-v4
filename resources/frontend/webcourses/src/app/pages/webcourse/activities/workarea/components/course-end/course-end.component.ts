import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivitiesService } from '../../../activities.service'
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { WorkareaService } from '../../workarea.service'

@Component({
  selector: 'app-course-end',
  templateUrl: './course-end.component.html',
  styleUrls: ['./course-end.component.scss'],
  animations: [FadeInOut]
})
export class CourseEndComponent {

  constructor(
    private router: Router,
    private activitiesService: ActivitiesService,
    private workareaService: WorkareaService
  ) { }

  reviewButton() {
    this.activitiesService.chapterIndex$.subscribe(
      (chapters) => {
        this.workareaService.loadActivities(chapters[0].syllabus[0])
      }
    )
  }

}
