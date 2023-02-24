import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GroupJoinCardComponent } from './group-join-card.component'
import { PipesModule } from '../../../shared/pipes/pipes.module'

@NgModule({
  declarations: [GroupJoinCardComponent],
  imports: [CommonModule, PipesModule],
  exports: [GroupJoinCardComponent]
})

export class GroupJoinCardModule { }
