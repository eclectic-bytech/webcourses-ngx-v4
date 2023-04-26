import { Component } from '@angular/core'
import { faGlobe, faEarthAmericas, faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http';

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
  htmlContent: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./contact/contach.html', { responseType: 'text' }).subscribe(datat => {
      this.htmlContent = datat;
      console.log(datat)
    });
  }
}

