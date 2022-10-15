import { Component } from '@angular/core'
import { ThemeService } from '../../../core/services/theme/theme.service'

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.sass']
})
export class PublishersComponent {

  constructor(
    public themeService: ThemeService
  ) {}

}
