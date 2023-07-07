import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [FadeInOut],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  htmlContent: string

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get(
      '/webcourses/publisher-files/default/html/pages/about.html', { responseType: 'text' }
    ).subscribe( htmlContent => {
      this.htmlContent = htmlContent
    })
  }
}
