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
        path: 'help',
        loadChildren: () => import('./pages/help/help.module').then(m => m.HelpModule)
      },
      {
        path: 'catalogue',
        loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)
      },
      {
        path: 'user',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./catalogue/directories/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'webcourse/activities',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./webcourse/webcourse.module').then(m => m.WebcourseModule)
      },
      {
        path: 'webcourse/builder/sorry',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./admin/builder/under-construction/under-construction.module').then(m => m.UnderConstructionModule)
      },
      {
        path: 'publisher/:pub_id',
        loadChildren: () => import('./catalogue/directories/publisher/publisher.module').then(m => m.PublisherModule)
      },
      {
        path: 'commerce/stripe/checkout',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./commerce/stripe/stripe-checkout/stripe-checkout.module').then(m => m.StripeCheckoutModule)
      },
      {
        path: 'admin',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: ':page',
        loadChildren: () => import('./pages/shared/shared.module').then(m => m.SharedModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/shared/shared.module').then(m => m.SharedModule)
      },
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
