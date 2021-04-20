import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'

import { CompletionStatsService } from '../../../../core/services/user/completion-stats.service'
import { Course } from '../../../../models/course.model'
import { MyCoursesCardService } from './my-courses-card.service'

@Component({
  selector: 'app-my-courses-card',
  templateUrl: './my-courses-card.component.html',
  styleUrls: ['./my-courses-card.component.sass']
})
export class MyCoursesCardComponent implements OnInit {

  @Input() course: Course

  constructor(
    private router: Router,
    public completionStatsService: CompletionStatsService,
    private myCoursesCardService: MyCoursesCardService
  ) { }

  ngOnInit() {
  }

  liveTac(course: Course): number {
    return (this.completionStatsService.completionStats.inPid[course.pid]) ?
      this.completionStatsService.completionStats.inPid[course.pid] :
      course.tac
  }

  goToActivity(pid: number, firstAid: boolean) {
    // When course is completed, first aid in course is fetched. Otherwise, last completed.
    this.myCoursesCardService.getDestinationAid(pid, firstAid).subscribe(
      (aid: string) => {
        this.router.navigateByUrl(`/webcourse/activities/${aid}`)
      }
    )
  }

}
