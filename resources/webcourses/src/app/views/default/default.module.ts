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
import { ThemeModule } from 'src/app/views/theme/theme.module'
import { ThemeService } from 'src/app/views/theme/theme.service'

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
    NgProgressHttpModule,
    ThemeModule
  ],
  providers: [
    ThemeService
  ]
})

export class DefaultModule { }
