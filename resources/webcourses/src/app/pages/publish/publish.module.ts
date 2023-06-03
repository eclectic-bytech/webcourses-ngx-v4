import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PublishRoutingModule } from './publish-routing.module'
import { PublishComponent } from './publish.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  declarations: [
    PublishComponent
  ],
  imports: [
    CommonModule,
    PublishRoutingModule,
    PipesModule
  ]
})
export class PublishModule { }
