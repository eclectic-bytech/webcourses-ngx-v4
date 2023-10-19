import { Component, Input } from '@angular/core'
import { Course } from 'src/app/models/course.model'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'wngx-catalogue-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
  standalone: true,
  imports: [
    NgbModule
  ]
})

export class CatalogueSorterComponent {
  public menuCollapsed = true
  public menuCollapsed2 = true
  private lastSortType: string = 'default' // Initialize to 'default'
  private isDescending: boolean = false
  private doubled: boolean = false

  @Input() courses: Course[]

  // Constants for sort types
  private readonly SORT_ALPHA: string = 'alpha'
  private readonly SORT_POP: string = 'pop'
  private readonly SORT_NEW: string = 'new'
  private readonly SORT_ID: string = 'ID'

  // Use a dictionary to map sort types to sorting functions
  private sortFunctions = {
    [this.SORT_ALPHA]: (a: Course, b: Course) => a.title.localeCompare(b.title),
    [this.SORT_POP]: (a: Course, b: Course) => b.total_students - a.total_students,
    [this.SORT_NEW]: (a: Course, b: Course) => this.compareDates(b.updated_at, a.updated_at),
    [this.SORT_ID]: (a: Course, b: Course) => b.id - a.id,
  }

  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }

  quickSort(sortType: string) {

    if (this.lastSortType === sortType && this.doubled == false) {
      this.isDescending = true
      this.doubled = true
    } else if (this.lastSortType === sortType) {
      sortType = 'ID'
    } else {
      this.isDescending = false
      this.doubled = false
    }

    this.courses.sort(this.getSortFunction(sortType))
    this.lastSortType = sortType
  }

  private getSortFunction(sortType: string): (a: Course, b: Course) => number {
    return this.isDescending
      ? (a: Course, b: Course) => this.sortFunctions[sortType](b, a)
      : this.sortFunctions[sortType]
  }

  private compareDates(dateA: string | undefined, dateB: string | undefined): number {
    if (!dateA && !dateB) return 0 // Both are empty, consider them equal
    if (!dateA) return 1 // 'a' is empty, push it to the end
    if (!dateB) return -1 // 'b' is empty, push it to the end

    const timestampA = new Date(dateA!).getTime()
    const timestampB = new Date(dateB!).getTime()

    return timestampB - timestampA // Sort in descending order
  }
}
