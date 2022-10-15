import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { AppService } from './../../app.service'
import { ThemeService } from '../../core/services/theme/theme.service'
import { ConfigService } from 'src/app/core/services/config/config.service'

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: [ './default.component.scss' ]
})
export class DefaultComponent {

  constructor(
    public sanitiser: DomSanitizer,
    public configService: ConfigService,
    public appService: AppService,
    public themeService: ThemeService
    ) { }

}
