import { Component } from '@angular/core'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  animations: [FadeInOut],
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  htmlContent: string
  constructor(
    public configService: ConfigService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('/webcourses/publisher-files/default/html/demo.html', { responseType: 'text' }).subscribe(data => {
      this.htmlContent = data
    })
  }

  demoButton() {
    window.location.href = `/user/register?code=${this.configService.params.freeAccessCode}`
  }

}
