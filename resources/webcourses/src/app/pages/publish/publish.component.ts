import { Component } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  animations: [FadeInOut],
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {

  constructor() { }

}
