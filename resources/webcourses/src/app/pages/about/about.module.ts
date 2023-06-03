import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AboutRoutingModule } from './about-routing.module'
import { AboutComponent } from './about.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    PipesModule
  ]
})
export class AboutModule { }
