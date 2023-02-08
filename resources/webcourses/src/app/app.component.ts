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

    console.warn ('\r\n\r\n .d8888b. 88888888888 .d88888b.  8888888b.       888 \r\nd88P  Y88b   \"888\"   d88P\" \"Y88b 888   Y88b      888         This tool is intended for developer use\r\nY88b.         888    888     888 888    888      888         only. If anyone told you to copy-paste\r\n \"Y888b.      888    888     888 888   d88P      888         anything in here it is most likely a scam.\r\n    \"Y88b.    888    888     888 8888888P\"       888         You could loose your account or reveal \r\n      \"888    888    888     888 888             Y8P         personal data to unwelcomed eyes!\r\nY88b  d88P    888    Y88b. .d88P 888              \"  \r\n \"Y8888P\"     888     \"Y88888P\"  888             888 \r\n                                                     \r\n                                                     \r\n                                                     \r\n                                            \r\n                                            ')
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
