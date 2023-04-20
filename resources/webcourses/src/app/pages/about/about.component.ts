import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [FadeInOut],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor() { }

}
