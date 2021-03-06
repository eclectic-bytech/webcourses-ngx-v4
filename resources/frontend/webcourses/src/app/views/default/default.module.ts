// Modules by Angular and the community
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgProgressModule } from '@ngx-progressbar/core'

// Cultivate Learning LAYOUT Modules
import { HeaderBarModule } from './header-bar/header-bar.module'

// Cultivate Learning Modules
import { CatalogueModule } from './../../pages/catalogue/catalogue.module'

// Cultivate Learning Components
import { DefaultComponent } from './default.component'
import { LoadingComponent } from './loading.component'

// Cultiavte Learning Services
import { ThemeService } from '../../core/services/theme/theme.service'


@NgModule({
  declarations: [
    DefaultComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CatalogueModule,
    HeaderBarModule,
    NgProgressModule
  ],
  providers: [
    ThemeService
  ]
})

export class DefaultModule { }
