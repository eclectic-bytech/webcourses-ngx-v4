import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DefaultComponent } from './views/default/default.component'
import { LoginRedirectComponent } from './login-redirect.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { CultivateLearningSessionInterceptor } from './core/interceptors/cultivate-learning-session.interceptor'

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginRedirectComponent
      },
      {
        path: 'help',
        loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule)
      },
      {
        path: 'catalogue',
        loadChildren: () => import('./pages/catalogue/catalogue.module').then(m => m.CatalogueModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'webcourse',
        loadChildren: () => import('./pages/webcourse/webcourse.module').then(m => m.WebcourseModule)
      },
      {
        path: 'publisher/:pub_id',
        loadChildren: () => import('./pages/publisher/publisher.module').then(m => m.PublisherModule)
      },
      {
        path: 'stripe/payment',
        loadChildren: () => import('./pages/stripe/payment/payment.module').then(m => m.PaymentModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
}
    )],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CultivateLearningSessionInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
