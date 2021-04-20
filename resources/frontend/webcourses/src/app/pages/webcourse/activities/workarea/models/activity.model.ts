import { ActivityMeta } from './activity-meta.model'
import { ActivityBody } from './activity-body.model'
import { ActivityAnswers } from './activity-answers.model'

export class Activity {
  constructor(
    public meta: ActivityMeta,
    public body: ActivityBody,
    public answers: ActivityAnswers[],
    public user_answers: any,
    public default_answer?: string
  ) {}
}
