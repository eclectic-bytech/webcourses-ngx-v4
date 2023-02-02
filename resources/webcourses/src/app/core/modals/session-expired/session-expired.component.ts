import { Component } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import { SessionExpiredService } from './session-expired.service'

@Component({
  selector: 'app-session-expired',
  standalone: true,
  templateUrl: './session-expired.component.html',
  styleUrls: ['./session-expired.component.sass'],
  imports: [NgbProgressbarModule]
})
export class SessionExpiredComponent {

  constructor(
    public sessionExpiredService: SessionExpiredService
  ) { }

}
