import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [FadeInOut],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  htmlContent: string

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('/webcourses/publisher-files/default/html/about.html', { responseType: 'text' }).subscribe(data => {
      this.htmlContent = data
    })
  }
}
