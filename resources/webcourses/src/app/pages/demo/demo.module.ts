import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DemoRoutingModule } from './demo-routing.module'
import { DemoComponent } from './demo.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

import { ContactBlockModule } from 'src/app/views/default/blocks/contact/contact.module'

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    PipesModule,
    ContactBlockModule
  ]
})

export class DemoModule { }
