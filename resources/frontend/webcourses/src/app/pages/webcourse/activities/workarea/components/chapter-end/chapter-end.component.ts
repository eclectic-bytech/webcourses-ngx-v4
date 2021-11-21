import { Component, OnInit } from '@angular/core'
import { NavService } from '../../nav/nav.service'
import { WorkareaService } from '../../workarea.service'
import { Router } from '@angular/router'
import { ActivitiesService } from '../../../activities.service'
import { FadeInOut } from '../../../../../../core/animations/fade-in-out.animation'
import { SelectedService } from '../../../sidebar/selected/selected.service'

@Component({
  selector: 'app-chapter-end',
  templateUrl: './chapter-end.component.html',
  styleUrls: ['./chapter-end.component.scss'],
  animations: [FadeInOut]
})
export class ChapterEndComponent implements OnInit {

  nextChapter: any

  constructor(
    private router: Router,
    public navService: NavService,
    public workareaService: WorkareaService,
    private activitiesService: ActivitiesService,
    private selectedService: SelectedService
  ) { }

  ngOnInit() {
    this.activitiesService.chapterIndex$.subscribe(
      (chapters) => {
        this.nextChapter = this.selectedService.getSelectedChapter(
          chapters, this.workareaService.activities[0], 1
        )
      }
    )
  }

  continueButton() {
    if (this.nextChapter) {
      this.workareaService.loadActivities(this.nextChapter.syllabus[0])
    } else {
      this.navService.endOfChapter = false
      this.navService.endOfCourse = true
    }
  }

}
