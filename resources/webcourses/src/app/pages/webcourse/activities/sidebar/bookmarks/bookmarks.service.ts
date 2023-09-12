import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Bookmark } from './bookmark.model'

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  public selectedBookmark: Bookmark[]
  private waitingForAPI = false
  isBookMarked: boolean
  current_cid: number

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getBookmarks(cid: number) {
    return this.httpClient.get<Bookmark[]>(
      `${this.configService.params.api.route}/webcourse/${cid}/bookmarks`
    ).subscribe((response) => { this.selectedBookmark = response })
  }

  postBookmark(aid: number) {
    if (!this.waitingForAPI) {
      this.waitingForAPI = true
      this.httpClient.post<number>(
        `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}`, aid
      ).subscribe(
        (response) => { console.log(response); this.getBookmarks(this.current_cid) },
        (err) => { console.log(err) },
        () => { this.waitingForAPI = false } // This executes every time, regardless whether API call succeeded or failed
      )
      this.isBookMarked = !this.isBookMarked
    }
  }

  deleteBookmark(aid: number) {
    if (!this.waitingForAPI) {
      this.waitingForAPI = true
      this.httpClient.delete<number>(
        `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}`
      ).subscribe(
        (response) => { this.getBookmarks(this.current_cid) },
        (err) => { console.log(err) },
        () => { this.waitingForAPI = false } // This executes every time, regardless whether API call succeeded or failed
      )
      this.isBookMarked = !this.isBookMarked
    }
  }
}
