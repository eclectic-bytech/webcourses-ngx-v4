import { Component } from '@angular/core'
import { faGlobe, faEarthAmericas, faEarthEurope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  public email = faGlobe
  public earthAmericas = faEarthAmericas
  public earthEurope = faEarthEurope
  constructor() { }
}
