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
  private lastCase: string
  private doubled: boolean

  @Input() courses: Course[]

  collapseMenus() {
    this.menuCollapsed = this.menuCollapsed2 = true
  }

  quickSort(sortType: string) {
    if (this.lastCase !== sortType) {
      switch (sortType) {

        case 'alpha':
          this.courses.sort((a, b) => a.title.localeCompare(b.title))
          break;

        case 'pop':
          this.courses.sort((a, b) => b.total_students - a.total_students)
          break;

        case 'new':
          this.courses.sort((a, b) => this.compareDates(a.updated_at, b.updated_at))
          break;

        default:
          break;
      }
      this.lastCase = sortType
      this.doubled = false
    } else if (this.lastCase == sortType && this.doubled == false) {
      switch (sortType) {

        case 'alpha':
          this.courses.sort((a, b) => b.title.localeCompare(a.title))
          break;

        case 'pop':
          this.courses.sort((a, b) => a.total_students - b.total_students)
          break;

        case 'new':
          this.courses.sort((a, b) => this.compareDates(b.updated_at, a.updated_at))
          break;

        default:
          break;
      }
      this.doubled = true
    } else {
      this.courses.sort((a, b) => a.id - b.id)
      this.doubled = false
      this.lastCase = 'default'
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
}
