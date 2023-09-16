import { Component, Input } from '@angular/core'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Publisher } from './../../../../models/publisher.model'

@Component({
  selector: 'app-publisher-profile-admin',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  animations: [FadeInOut]
})
export class PublisherProfileComponent {

  @Input() publisher: Publisher

}
