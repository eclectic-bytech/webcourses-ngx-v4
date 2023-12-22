import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class ClickRotateService {

  public userSelections = {}
  public showMarking = 'user'

  constructor() { }

}
