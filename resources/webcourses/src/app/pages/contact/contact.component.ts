import { Component } from '@angular/core'
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
  constructor() { }
}
