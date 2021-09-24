import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chapter } from 'src/app/pages/webcourse/activities/models/chapter.model';
import { ConfigService } from '../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getChapter(chid: number) {
    return this.http.get<Chapter>(`
      ${this.config.params.api.route}/webcourse/chapter/${chid}
    `).pipe(chapter => chapter)
  }
}
