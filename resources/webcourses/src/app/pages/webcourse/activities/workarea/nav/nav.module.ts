import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NavComponent } from './nav.component'

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [NavComponent]
})

export class NavModule { }
