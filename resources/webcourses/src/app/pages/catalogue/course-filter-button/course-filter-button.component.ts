import { Component } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-course-filter-button',
  templateUrl: './course-filter-button.component.html',
  styleUrls: ['./course-filter-button.component.sass']
})
export class CourseFilterButtonComponent {
  public menuCollapsed = true
  public menuCollapsed2 = true
  public faFilter = faFilter
  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }
}
