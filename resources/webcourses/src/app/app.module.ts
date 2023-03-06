import { BrowserModule, Title } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics'

import { AppRoutingModule } from './app-routing.module'
import { CatalogueModule } from './pages/catalogue/catalogue.module'

import { AppComponent } from './app.component'
import { DefaultModule } from './views/default/default.module'

import { UserService } from './core/services/user/user.service'
import { ConfigService } from './core/services/config/config.service'
import { ActivitiesService } from './pages/webcourse/activities/activities.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot('UA-2342672-30'),
    NgxGoogleAnalyticsRouterModule,
    AppRoutingModule,
    CatalogueModule,
    DefaultModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (config: ConfigService) => {
        return () => {
          return config.loadConfig()
        }
      }
    },
    Title,
    UserService,
    ActivitiesService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
