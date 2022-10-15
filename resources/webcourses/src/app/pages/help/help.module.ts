import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HelpComponent } from './help.component'
import { HelpRoutingModule } from './help-routing.module'
import { FooterModule } from './../../views/default/footer/footer.module'

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    FooterModule
  ]
})
export class HelpModule { }
