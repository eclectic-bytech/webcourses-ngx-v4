import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { HeaderBarComponent } from './header-bar.component'
import { PipesModule } from 'src/app/pipes/pipes.module'
import { AppRoutingModule } from '../../../app-routing.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { GravatarModule } from 'ngx-gravatar'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    HeaderBarComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    PipesModule,
    NgbModule,
    GravatarModule,
    NgbCollapseModule
  ],
  exports: [
    HeaderBarComponent
  ]
})
export class HeaderBarModule { }
