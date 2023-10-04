import { Component } from '@angular/core'
import { CatalogueService } from '../catalogue.service'

@Component({
  selector: 'app-course-filter-button',
  templateUrl: './course-filter-button.component.html',
  styleUrls: ['./course-filter-button.component.sass']
})
export class CourseFilterButtonComponent {
  public menuCollapsed = true
  public menuCollapsed2 = true
  private sortID = 0

  constructor(
    public catalogueService: CatalogueService
  ) { }
  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }

  sortbyAlphabetical() {
    if (this.sortID !== 1) {
      this.catalogueService.webcoursesAll$.subscribe((cat) => {
        cat.sort((a, b) => a.title.localeCompare(b.title))
      })
      this.sortID = 1
    } else {
      this.sortbyID()
    }
  }

  sortbyRecent() {
    if (this.sortID !== 2) {
      this.catalogueService.webcoursesAll$.subscribe((cat) => {
        cat.sort((a, b) => this.compareDates(a.updated_at, b.updated_at))
      })
      this.sortID = 2
    } else {
      this.sortbyID()
    }
  }

  private compareDates(dateA: string | undefined, dateB: string | undefined): number {
    if (!dateA && !dateB) return 0 // Both are empty, consider them equal
    if (!dateA) return 1 // a is empty, push it to the end
    if (!dateB) return -1 // b is empty, push it to the end

    const timestampA = new Date(dateA).getTime()
    const timestampB = new Date(dateB).getTime()

    return timestampB - timestampA // Sort in descending order
  }

  sortbyPopular() {
    if (this.sortID !== 3) {
      this.catalogueService.webcoursesAll$.subscribe((cat) => {
        cat.sort((a, b) => b.total_students - a.total_students)
      })
      this.sortID = 3
    } else {
      this.sortbyID()
    }
  }

  sortbyID() {
    this.catalogueService.webcoursesAll$.subscribe((cat) => {
      cat.sort((a, b) => a.id - b.id)
    })
    this.sortID = 0
  }
}
