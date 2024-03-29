import { Component } from '@angular/core'
import { WebcourseService } from 'src/app/webcourse/webcourse.service'

@Component({
  selector: 'wngx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(
    public webcourseService: WebcourseService
  ) {}

}
