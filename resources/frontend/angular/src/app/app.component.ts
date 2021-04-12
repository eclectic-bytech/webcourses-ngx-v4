import { Component, OnInit } from '@angular/core'
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    public appService: AppService,
  ) {}

  ngOnInit() {
    this.appService.initLogged()
  }

}
