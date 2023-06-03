import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

// WNGX imports
import { ConfigService } from 'src/app/core/services/config/config.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  animations: [FadeInOut],
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  public htmlContent: string

  constructor(
    public configService: ConfigService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get(
      '/webcourses/publisher-files/default/html/pages/demo.html', { responseType: 'text' }
    ).subscribe( htmlContent => {
      this.htmlContent = htmlContent
    })
  }

}
