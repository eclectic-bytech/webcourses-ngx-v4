import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Bookmark } from './bookmark.model'

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  public selectedBookmark: Bookmark[]

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getBookmarks(cid: number) {
    console.log(cid)
    return this.httpClient.get<Bookmark[]>(
      `${this.configService.params.api.route}/webcourse/${cid}/bookmarks`
    ).subscribe((response) => { this.selectedBookmark = response })
  }

  get bookmarkIndex() {
    return this.selectedBookmark
  }
}
