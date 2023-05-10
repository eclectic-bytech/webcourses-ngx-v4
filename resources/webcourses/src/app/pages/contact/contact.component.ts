import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [FadeInOut],
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  public htmlContent: string

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

