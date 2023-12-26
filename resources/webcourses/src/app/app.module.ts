import { BrowserModule, Title } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics'
import { NgxStripeModule } from 'ngx-stripe'

import { AppRoutingModule } from './app-routing.module'
import { CatalogueModule } from 'src/app/catalogue/catalogue.module'

import { AppComponent } from './app.component'
import { DefaultModule } from './views/default/default.module'

import { UserService } from './core/services/user/user.service'
import { ConfigService } from './core/services/config/config.service'
import { WebcourseService } from 'src/app/webcourse/webcourse.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot('G-YFTM077Q4Y'),
    NgxStripeModule.forRoot('pk_test_0pgZ4oeb3vHRAJn8dhmqHD3b00Y778LkVQ'),
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
    WebcourseService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
