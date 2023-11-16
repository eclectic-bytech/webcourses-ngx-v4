import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

import { BookmarksService } from './bookmarks.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { Bookmark } from './bookmark.model'
import { Activity } from '../../workarea/models/activity.model'

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass'],
  animations: [FadeInOut]
})
export class BookmarksComponent {

  @Input() firstActivity: Activity

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
        if (this.firstActivity.meta.activity_id == bookmark.aid) {
          this.firstActivity.bookmark = null
        }
      }
    )
  }

}
