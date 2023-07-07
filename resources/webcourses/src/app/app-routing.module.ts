import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthUserGuard } from './core/auth/auth-user.guard'
import { DefaultComponent } from './views/default/default.component'
import { CultivateLearningSessionInterceptor } from './core/interceptors/cultivate-learning-session.interceptor'
import { UserSessionExpiredInterceptor } from './core/interceptors/user-session-expired.interceptor'

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule),
        pathMatch: 'full'
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
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'webcourse',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./pages/webcourse/webcourse.module').then(m => m.WebcourseModule)
      },
      {
        path: 'publisher/:pub_id',
        loadChildren: () => import('./pages/publisher/publisher.module').then(m => m.PublisherModule)
      },
      {
        path: 'commerce/stripe/checkout',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./commerce/stripe/stripe-checkout/stripe-checkout.module').then(m => m.StripeCheckoutModule)
      },
      {
        path: 'admin',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'getstarted',
        loadChildren: () => import('./pages/publish/publish.module').then(m => m.PublishModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'pricing',
        loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CultivateLearningSessionInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserSessionExpiredInterceptor,
      multi: true
    },
    AuthUserGuard
  ]
})

export class AppRoutingModule { }
