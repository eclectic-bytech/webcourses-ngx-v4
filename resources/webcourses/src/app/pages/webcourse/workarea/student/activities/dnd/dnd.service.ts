import { Injectable } from '@angular/core'
import { Activity } from 'src/app/pages/webcourse/models/activity.model'
import { ActivityAnswers } from 'src/app/pages/webcourse/workarea/models/activity-answers.model'

@Injectable({
  providedIn: 'root'
})
export class DndService {

  constructor() { }

  showUserOrder(activity: Activity) {
    // Orders the items in the sequence that the user selected
    let userOrder = new Array()
    activity.user_answers.forEach(aid => {
      function isAid(answer: ActivityAnswers) {
        return answer.id === aid.answer_id
      }
      userOrder.push(activity.answers.find(isAid))
    })
    activity.answers = userOrder
  }

}
