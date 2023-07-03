import { ActivityMeta } from './activity-meta.model'
import { ActivityAnswers } from './activity-answers.model'
import { Bookmarks } from '../../sidebar/bookmarks/bookmarks.model'

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
    public bookmarks: Bookmarks,
    public default_answer?: string,
  ) { }
}
