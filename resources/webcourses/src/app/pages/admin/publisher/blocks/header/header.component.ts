import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { UserService } from 'src/app/core/services/user/user.service'
import { Publisher } from 'src/app/models/publisher.model'
import { PublisherService } from 'src/app/pages/catalogue/publisher/publisher.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() title: string

  public publisher$ = new Observable<Publisher>

  constructor(
    private publisherService: PublisherService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.publisher$ = this.publisherService.getPublisher(this.userService.user.id)
  }
}
