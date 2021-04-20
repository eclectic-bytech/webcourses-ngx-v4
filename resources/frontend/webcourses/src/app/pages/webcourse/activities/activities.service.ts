import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Chapter } from './models/chapter.model'

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  // Central variable, accessible to sidebar & workarea Modules +children to utilise shareReplay
  // We OnInit this chapterIndex$ as = chapterIndexService.getChapterIndex(aid) in the Component
  chapterIndex$: Observable<Chapter[]>
  showSideMenu = true

  constructor() {}

}
