import { Component, Input } from '@angular/core'

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

  @Input() firstActivity: Activity

  constructor(
    public bookmarksService: BookmarksService,
    public selectedCourseService: SelectedCourseService
  ) { }

  deleteBookmarkBtn(): void {
    this.bookmarksService.deleteBookmark(
      this.firstActivity.meta.activity_id
    ).subscribe( () => {
        this.firstActivity.bookmark = null
        this.updateSidebarBookmarksTabOnDelete(this.existingBookmarks)
    })
  }

  addBookmarkBtn(): void {
    this.bookmarksService.addBookmark(
      this.firstActivity.meta.activity_id
    ).subscribe(
      (bookmark) => {
        this.firstActivity.bookmark = bookmark
        this.updateSidebarBookmarksTabOnAdd(bookmark)
      }
    )
  }

  updateSidebarBookmarksTabOnAdd(bookmark: Bookmark): void {
    this.bookmarksService.bookmarksSubject.next(
      [...this.existingBookmarks, bookmark]
    )
  }

  updateSidebarBookmarksTabOnDelete(existingBookmarks: Bookmark[]): void {
    let i = existingBookmarks.findIndex( bookmark => {
      // For nice fade effects on delete, bookmarks.delete = true is set instead true delete.
      // When user clicks bookmark tab repeatedly, the same bookmark will be present multiple times.
      // The if !bookmark.deleted ensures findIndex finds the active bookmark
      if (!bookmark.deleted) {
        return bookmark.aid === this.firstActivity.meta.activity_id
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
