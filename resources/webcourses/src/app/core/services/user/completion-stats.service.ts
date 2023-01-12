import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CompletionStatsService {

  constructor() { }

  public totalActivitiesCompleted: number = 0

}
