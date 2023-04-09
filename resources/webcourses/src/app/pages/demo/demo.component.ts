import { Component } from '@angular/core'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { ConfigService } from 'src/app/core/services/config/config.service'


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  animations: [FadeInOut],
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  constructor(
    public configService: ConfigService
  ) { }

  demoButton() {
    window.location.href = `/user/register?code=${this.configService.params.freeAccessCode}`
  }

}
