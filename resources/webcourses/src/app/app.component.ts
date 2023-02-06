import { Component, OnInit, OnDestroy, isDevMode } from '@angular/core'
import { Subscription } from 'rxjs'
import { AppService } from './app.service'
import { SelectedCourseService } from './core/services/selected-course/selected-course.service'
import { ThemeService } from './core/services/theme/theme.service'
import { Course } from './models/course.model'
import { environment } from 'src/environments/environment'

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
    if (isDevMode()){
      console.log ("we're in dev mode")
    } else {
      console.log ("we're not in dev mode")
    }
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
