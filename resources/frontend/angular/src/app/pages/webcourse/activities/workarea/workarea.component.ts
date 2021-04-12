import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WorkareaService } from './workarea.service'
import { NavService } from './nav/nav.service'
import { FadeInOut } from './../../../../core/animations/fade-in-out.animation'

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
  animations: [FadeInOut]
})

export class WorkAreaComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public workareaService: WorkareaService,
    public navService: NavService,
  ) { }

  ngOnInit() {
    this.workareaService.loadActivities(this.route.snapshot.paramMap.get('aid'))
  }

}
