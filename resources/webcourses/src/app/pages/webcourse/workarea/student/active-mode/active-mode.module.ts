import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ActiveModeComponent } from './active-mode.component'
import { PipesModule } from 'src/app/shared/pipes/pipes.module'

@NgModule({
  declarations: [
    ActiveModeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    ActiveModeComponent
  ]
})

export class ActiveModeModule { }
