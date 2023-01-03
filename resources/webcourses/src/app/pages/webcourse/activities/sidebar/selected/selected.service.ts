import { Injectable } from '@angular/core'

// WNGX Services
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { CompletionStatsService } from '../../../../../core/services/user/completion-stats.service'

@Injectable({
  providedIn: 'root'
})
export class SelectedService {

  constructor(
    private completionStatsService: CompletionStatsService,
    public selectedCourseService: SelectedCourseService
  ) {}

}
