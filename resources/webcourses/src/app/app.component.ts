import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'
import { SelectedCourseService } from './core/services/selected-course/selected-course.service'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    public appService: AppService,
    public selectedCourseService: SelectedCourseService
  ) {}

  ngOnInit() {
    this.appService.initLogged()
    this.selectedCourseService.servicePrimer()
  }

}
