import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthUserGuard } from './core/auth/auth-user.guard'
import { DefaultComponent } from './views/default/default.component'
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
        path: 'stripe/payment',
        loadChildren: () => import('./pages/stripe/payment/payment.module').then(m => m.PaymentModule)
      },
      {
        path: 'admin',
        canActivate: [AuthUserGuard],
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
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
