import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  animations: [FadeInOut],
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {
  htmlContent: string

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('/webcourses/publisher-files/default/html/publish.html', { responseType: 'text' }).subscribe(data => {
      this.htmlContent = data
    })
  }
}
