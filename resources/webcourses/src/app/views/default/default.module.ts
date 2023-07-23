// Modules by Angular and the community
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'

// WNGX imports
import { HeaderBarModule } from './header-bar/header-bar.module'
import { NavAdminModule  } from './nav-admin/nav-admin.module'
import { CatalogueModule } from './../../pages/catalogue/catalogue.module'
import { DefaultComponent } from './default.component'
import { ThemeResetService } from 'src/app/core/directives/theme-reset/theme-reset.service'

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CatalogueModule,
    HeaderBarModule,
    NavAdminModule,
    NgProgressModule,
    NgProgressHttpModule
  ],
  providers: [
    ThemeResetService
  ]
})

export class DefaultModule { }
