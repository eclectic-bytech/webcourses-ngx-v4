import { Component } from '@angular/core'
import { ThemeResetService } from 'src/app/views/theme-reset/theme-reset.service'

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.sass']
})
export class PublishersComponent {

  constructor(
    public themeResetService: ThemeResetService
  ) {}

}
