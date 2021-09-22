import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { shareReplay } from 'rxjs/operators'
import { Chapter } from '../../models/chapter.model'
import { ConfigService } from '../../../../../core/services/config/config.service'

@Injectable({
  providedIn: 'root'
})
export class ChapterIndexService {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {}

  getChapterIndex(aid: string) {
    return this.httpClient
      .get<Chapter[]>(
        `${this.configService.params.api.route}/webcourse/chapters/${aid}`
      ).pipe(shareReplay(1))
  }
}
