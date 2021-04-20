import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from './../../../../core/services/user/user.service'
import { User } from '../../../../core/models/user.model'

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.sass']
})
export class PaymentSuccessfulComponent implements OnInit {

  public user: User

  constructor(
    public router: Router,
    public userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.user$.subscribe(
      (user: User) => {
        this.user = user
      }
    )
  }
}
