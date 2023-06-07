// Modules by Angular and the community
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'

// Cultivate Learning LAYOUT Modules
import { HeaderBarModule } from './header-bar/header-bar.module'
import { NavAdminModule  } from './nav-admin/nav-admin.module'

// Cultivate Learning Modules
import { CatalogueModule } from './../../pages/catalogue/catalogue.module'

// Cultivate Learning Components
import { DefaultComponent } from './default.component'

// Cultiavte Learning Services
import { ThemeService } from '../../core/services/theme/theme.service'


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
    ThemeService
  ]
})

export class DefaultModule { }
