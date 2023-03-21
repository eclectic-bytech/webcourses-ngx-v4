import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'

import { FadeInOut } from './../../../../../../core/animations/fade-in-out.animation'
import { Activity } from '../../models/activity.model'
import { DndService } from './dnd.service'

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss'],
  animations: [FadeInOut]
})
export class DndComponent implements OnInit{

  @Input() activity: Activity
  @Output() activityChange = new EventEmitter<Activity>() // Return updated DnD order to parent, i.e. activeModeComponent
  markOrder = true // Colour highlight right and wrong placed items
  dndMatchDataStatic: string[] = []

  constructor(
    public dndService: DndService
  ) {}

  ngOnInit() {
    if (this.activity.meta.activity_type === 'dnd-match') {
      // Break out static column's captions into dndMatchDataStatic.
      // Prevents static column captions from following items moved in the sortable col.
      this.activity.answers.forEach(answer => {
        this.dndMatchDataStatic.push(answer.caption.static)
      })
    }
    if (this.activity.user_answers) {
      this.dndService.showUserOrder(this.activity)
    }
  }

  drop(event: CdkDragDrop<Activity>) {
    moveItemInArray(this.activity.answers, event.previousIndex, event.currentIndex)
    this.activityChange.emit(this.activity)
  }

  showInitialOrder() {
    this.activity.answers.sort((a,b)=>a.slot - b.slot) // Sort answers array by 'slot' property, ascending
  }

  showCorrectOrder() {
    this.activity.answers.sort((a,b)=>a.correct - b.correct) // Sort answers array by 'correct' property, ascending
  }

  orderButtons($event){
    // Toggles active button, and decides whether activity marking should be shown
    let clickedElement = $event.target || $event.srcElement
    this.markOrder = (clickedElement.name === 'yours') ? true : false;

    if( clickedElement.nodeName === "BUTTON" ) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
      // if a Button already has Class: .active
      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }
      clickedElement.className += " active";
    }
  }

}
