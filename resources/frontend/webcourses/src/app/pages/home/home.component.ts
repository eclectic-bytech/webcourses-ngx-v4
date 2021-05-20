import { Component, OnInit } from '@angular/core'
import { ConfigService } from './../../core/services/config/config.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public configService: ConfigService
  ) { }

  ngOnInit(): void {
  }

}
