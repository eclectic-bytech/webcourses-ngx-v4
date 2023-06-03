import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DemoRoutingModule } from './demo-routing.module'
import { DemoComponent } from './demo.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    PipesModule
  ]
})

export class DemoModule { }
