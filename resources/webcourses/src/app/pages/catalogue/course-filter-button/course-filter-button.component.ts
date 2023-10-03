import { Component } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-course-filter-button',
  templateUrl: './course-filter-button.component.html',
  styleUrls: ['./course-filter-button.component.sass']
})
export class CourseFilterButtonComponent {
  public menuCollapsed = true
  public menuCollapsed2 = true
  public faFilter = faFilter

  constructor(
    public catalogueService: CatalogueService
  ) { }
  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }

  Alphabetical() {
    this.catalogueService.webcoursesAll$.subscribe((cat) => {
      cat.sort((a, b) => a.title.localeCompare(b.title))
    })
  }

  Recent() {
    this.catalogueService.webcoursesAll$.subscribe((cat) => {
      cat.sort((a, b) => this.compareDates(a.updated_at, b.updated_at));
    });
  }

  private compareDates(dateA: string | undefined, dateB: string | undefined): number {
    if (!dateA && !dateB) return 0; // Both are empty, consider them equal
    if (!dateA) return 1; // a is empty, push it to the end
    if (!dateB) return -1; // b is empty, push it to the end

    const timestampA = new Date(dateA).getTime();
    const timestampB = new Date(dateB).getTime();

    return timestampB - timestampA; // Sort in descending order
  }
}
