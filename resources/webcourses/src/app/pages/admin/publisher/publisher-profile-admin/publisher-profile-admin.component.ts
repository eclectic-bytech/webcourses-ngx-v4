import { Component, OnInit } from '@angular/core';
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-publisher-profile-admin',
  templateUrl: './publisher-profile-admin.component.html',
  styleUrls: ['./publisher-profile-admin.component.sass'],
  animations: [FadeInOut]
})
export class PublisherProfileAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
