import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemeDirective } from './theme.directive'


@NgModule({
  declarations: [
    ThemeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeDirective
  ]
})
export class ThemeModule { }
