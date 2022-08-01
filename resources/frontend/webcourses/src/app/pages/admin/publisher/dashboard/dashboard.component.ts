import { Component, OnInit } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publisher-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  animations: [FadeInOut]
})
export class PublisherDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
