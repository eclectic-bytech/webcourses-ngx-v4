import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { faGlobe, faEarthAmericas, faEarthEurope } from '@fortawesome/free-solid-svg-icons'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [FadeInOut],
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  public email = faGlobe
  public earthAmericas = faEarthAmericas
  public earthEurope = faEarthEurope
  htmlContent: string

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('/webcourses/publisher-files/default/html/pages/contact.html', { responseType: 'text' })
      .subscribe(
        (html: string) => {
          this.htmlContent = html
        }
      )
  }
}

