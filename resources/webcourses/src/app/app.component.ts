import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from './app.service'
import { SelectedCourseService } from './core/services/selected-course/selected-course.service'
import { ThemeService } from './core/services/theme/theme.service'
import { Course } from './models/course.model'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {

  private sub: Subscription
  constructor(
    public appService: AppService,
    public selectedCourseService: SelectedCourseService,
    public themeService: ThemeService
  ) {}

  ngOnInit() {
    this.appService.initLogged()
    // this.selectedCourseService.servicePrimer()

    this.sub = this.selectedCourseService.selectedCourse$.subscribe(
      (course: Course) => { if (course) this.themeService.changeTheme(course.theme) }
    )


  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
