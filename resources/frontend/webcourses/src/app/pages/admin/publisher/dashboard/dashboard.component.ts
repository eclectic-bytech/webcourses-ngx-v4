import { Component, OnInit } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publisher-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [FadeInOut]
})
export class PublisherAdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
