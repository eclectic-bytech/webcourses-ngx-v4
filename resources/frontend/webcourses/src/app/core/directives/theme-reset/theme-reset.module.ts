import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThemeResetDirective } from './theme-reset.directive'


@NgModule({
  declarations: [
    ThemeResetDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeResetDirective
  ]
})
export class ThemeResetModule { }
