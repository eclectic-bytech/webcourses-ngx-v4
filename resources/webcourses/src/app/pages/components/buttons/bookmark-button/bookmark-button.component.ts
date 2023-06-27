import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from 'src/app/core/services/config/config.service';
import { ActivityMeta } from 'src/app/pages/webcourse/activities/workarea/models/activity-meta.model';

@Component({
  selector: 'app-bookmark-button',
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.sass']
})

export class BookmarkButtonComponent {

  @Input() activityMeta: ActivityMeta

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
  ) { }

  bookmarkActivity(aid: number) {
    this.httpClient.put<number>(
      `${this.configService.params.api.route}/admin/publisher/course-editor/syllabus/${aid}/bookmark`, aid
    ).subscribe(
      (response) => { console.log(response) },
      (err) => { console.log(err) }
    )
  }
}
