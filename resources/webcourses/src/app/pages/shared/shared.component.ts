import { Component } from '@angular/core';
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  animations: [FadeInOut],
  styleUrls: ['./shared.component.sass']
})
export class SharedComponent {
  htmlContent: string
  selectedPage: string

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.selectedPage = window.location.href.split('/').slice(-1)[0] || 'about'
    if (this.selectedPage == 'getstarted') {
      this.selectedPage = 'publish'
    }
    this.httpClient.get(
      '/webcourses/publisher-files/default/html/pages/' + this.selectedPage + '.html', { responseType: 'text' }
    ).subscribe(htmlContent => {
      this.htmlContent = htmlContent
    })

  }
}
