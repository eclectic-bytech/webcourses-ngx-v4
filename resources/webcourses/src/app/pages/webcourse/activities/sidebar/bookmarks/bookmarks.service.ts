import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { Bookmark } from './bookmark.model'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  public bookmarksSubject: BehaviorSubject<any[]> = new BehaviorSubject([])
  public bookmarks$: Observable<Bookmark[]> = this.bookmarksSubject.asObservable()

  public selectedBookmark: Bookmark[]

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) { }

  getBookmarks(cid: number) {
    this.httpClient.get<Bookmark[]>(
      `${this.configService.params.api.route}/webcourse/${cid}/bookmarks`
    ).subscribe(
      (bookmarks) => {
        this.bookmarksSubject.next(bookmarks)
      }
    )
  }

  deleteBookmark(aid: number): Observable<any> {
    return this.httpClient.delete(
      `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}`
    )
  }

  addBookmark(aid: number): Observable<any> {
    return this.httpClient.post(
      `${this.configService.params.api.route}/webcourse/activities/bookmark/${aid}`, aid
    )
  }
}
