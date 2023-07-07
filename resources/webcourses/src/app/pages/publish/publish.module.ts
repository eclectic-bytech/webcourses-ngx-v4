import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PublishRoutingModule } from './publish-routing.module'
import { PublishComponent } from './publish.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'
import { ContactBlockModule } from 'src/app/views/default/blocks/contact/contact.module'

@NgModule({
  declarations: [
    PublishComponent
  ],
  imports: [
    CommonModule,
    PublishRoutingModule,
    PipesModule,
    ContactBlockModule
  ]
})
export class PublishModule { }
