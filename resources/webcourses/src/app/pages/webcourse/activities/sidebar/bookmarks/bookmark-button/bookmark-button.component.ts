import { Component } from '@angular/core'

// WNGX imports
import { BookmarksService } from 'src/app/pages/webcourse/activities/sidebar/bookmarks/bookmarks.service'
import { SelectedCourseService } from 'src/app/core/services/selected-course/selected-course.service'
import { Activity } from 'src/app/pages/webcourse/activities/workarea/models/activity.model'
import { Bookmark } from 'src/app/pages/webcourse/activities/sidebar/bookmarks/bookmark.model'

@Component({
  selector: 'app-bookmark-button',
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.scss']
})

export class BookmarkButtonComponent {

  constructor(
    public bookmarksService: BookmarksService,
    public selectedCourseService: SelectedCourseService
  ) { }

  deleteBookmarkBtn(activitySet: Activity[]): void {
    this.bookmarksService.deleteBookmark(
      activitySet[0].meta.activity_id
    ).subscribe( () => {
        activitySet[0].bookmark = null
        this.updateSidebarBookmarksTabOnDelete(activitySet, this.existingBookmarks)
    })
  }

  addBookmarkBtn(activitySet: Activity[]): void {
    this.bookmarksService.addBookmark(
      activitySet[0].meta.activity_id
    ).subscribe(
      (bookmark) => {
        activitySet[0].bookmark = bookmark
        this.updateSidebarBookmarksTabOnAdd(bookmark)
      }
    )
  }

  updateSidebarBookmarksTabOnAdd(bookmark: Bookmark): void {
    this.bookmarksService.bookmarksSubject.next(
      [...this.existingBookmarks, bookmark]
    )
  }

  updateSidebarBookmarksTabOnDelete(activitySet: Activity[], existingBookmarks: Bookmark[]): void {
    let i = existingBookmarks.findIndex( bookmark => {
      // For nice fade effects on delete, bookmarks.delete = true is set instead true delete.
      // When user clicks bookmark tab repeatedly, the same bookmark will be present multiple times.
      // The if !bookmark.deleted ensures findIndex finds the active bookmark
      if (!bookmark.deleted) {
        return bookmark.aid === activitySet[0].meta.activity_id
      }
    })

    // If no matching bookmark is found, i will be -1
    if (i !== -1) {
      existingBookmarks[i].deleted = true
    }
  }

  get existingBookmarks() {
    return this.bookmarksService.bookmarksSubject.value
  }
}
