import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { BookmarksService } from './bookmarks.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { Bookmark } from './bookmark.model'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass'],
  animations: [FadeInOut]
})
export class BookmarksComponent {

  constructor(
    public bookmarksService: BookmarksService,
    private selectedCourseService: SelectedCourseService,
    private router: Router
  ) {
    this.bookmarksService.getBookmarks(
      this.selectedCourseService.selectedCourse.id
    )
  }

  loadBookmarkedActivity(aid: number) {
    this.router.navigateByUrl(`/webcourse/activities/${aid}`)
  }

  deleteBookmarkBtn(bookmark: Bookmark) {
    bookmark.deleted = true
    this.bookmarksService.deleteBookmark(bookmark.aid).subscribe(
      () => {
        this.bookmarksService.deletedBookmarkAid$.next(bookmark.aid)
      }
    )
  }

}
