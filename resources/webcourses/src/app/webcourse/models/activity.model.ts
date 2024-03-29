import { ActivityMeta } from './activity-meta.model'
import { ActivityAnswers } from 'src/app/webcourse/workarea/models/activity-answers.model'
import { Bookmark } from 'src/app/webcourse/sidebar/tabs/student/bookmarks/bookmark.model'

export class Activity {
  constructor(
    public id: number,
    public prequestion: string,
    public question: string,
    public assess_text: string,
    public after_word: string,
    public created_at: string,
    public updated_at: string,
    public meta: ActivityMeta,
    public user_long_answer: string,
    public answers: ActivityAnswers[],
    public user_answers: any,
    public bookmark: Bookmark,
    public default_answer?: string,
  ) { }
}
