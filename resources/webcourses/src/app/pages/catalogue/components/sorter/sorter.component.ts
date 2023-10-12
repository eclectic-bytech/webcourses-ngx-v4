import { Component, Input } from '@angular/core'
import { Course } from 'src/app/models/course.model'

@Component({
  selector: 'wngx-catalogue-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.scss'],
  standalone: true
})

export class CatalogueSorterComponent {

  @Input() courses: Course[]

  quickSort(sortType: string) {
    switch (sortType) {

      case 'alpha':
        this.courses.sort((a,b) => a.title.localeCompare(b.title))
        break;

      case 'alpha-reverse':
        this.courses.sort((a,b) => b.title.localeCompare(a.title))
        break;

      case 'pop':
        this.courses.sort((a, b) => b.total_students - a.total_students)
        break;

      case 'pop-reverse':
        this.courses.sort((a, b) => a.total_students - b.total_students)
        break;

      default:
        break;
    }

  }
}
