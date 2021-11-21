import { Component } from '@angular/core'
import { SelectedService } from './selected.service'
import { CompletionStatsService } from '../../../../../core/services/user/completion-stats.service'
import { FadeInOut } from '../../../../../core/animations/fade-in-out.animation'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.scss'],
  animations: [FadeInOut]
})
export class SelectedComponent {

  constructor(
    public selectedService: SelectedService,
    public completionStatsService: CompletionStatsService,
    public selectedCourseService: SelectedCourseService
  ) { }

}
