import { Component } from '@angular/core'
import { ThemeService } from 'src/app/views/theme/theme.service'

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
