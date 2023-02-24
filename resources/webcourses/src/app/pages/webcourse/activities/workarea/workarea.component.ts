import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { faPrint } from '@fortawesome/free-solid-svg-icons'

// WNGX services
import { WorkareaService } from './workarea.service'
import { NavService } from './nav/nav.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

//WNGX models and misc
import { Activity } from './models/activity.model'
import { FadeInOut } from './../../../../core/animations/fade-in-out.animation'
import { UserService } from 'src/app/core/services/user/user.service'


@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  animations: [FadeInOut]
})

export class WorkAreaComponent implements OnInit {

  public activitySet: Activity[]

  public faPrint = faPrint

  constructor(
    public route: ActivatedRoute,
    public workareaService: WorkareaService,
    public navService: NavService,
    public selectedService: SelectedCourseService,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.workareaService
      .getActivities(this.route.snapshot.paramMap.get('aid'))
      .subscribe(
        (activitySet: Activity[]) => {
          this.selectedService.selectedActivitySet$.next(activitySet)

          // any activity in set would do for the primer, choosing 0 by default
          this.selectedService.fullCourseLoader(activitySet[0])
          this.workareaService.propagateActivities(activitySet)
        }
      )
  }

  printButton() {
    window.print()
  }
}
