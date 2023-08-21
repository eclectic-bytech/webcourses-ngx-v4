import { Component } from '@angular/core';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-course-filter-button',
  templateUrl: './course-filter-button.component.html',
  styleUrls: ['./course-filter-button.component.sass']
})
export class CourseFilterButtonComponent {
  public faArrowDownShortWide = faArrowDownShortWide

}
