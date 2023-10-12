import { ActivityMeta } from './activity-meta.model'
import { ActivityAnswers } from './activity-answers.model'
import { Bookmark } from '../../sidebar/bookmarks/bookmark.model'

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
