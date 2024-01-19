import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CourseComponent } from './course.component'
import { CourseRoutingModule } from './course-routing.module'
import { LoadingSpinnerModule } from 'src/app/core/modules/loading-spinner/loading-spinner.module'
import { ThemeModule } from 'src/app/views/theme/theme.module'
import { StripeCheckoutModule } from 'src/app/commerce/stripe/stripe-checkout/stripe-checkout.module'
import { EnterCourseButtonModule } from '../../components/buttons/enter-course/enter-course-button.module'

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    LoadingSpinnerModule,
    ThemeModule,
    StripeCheckoutModule,
    EnterCourseButtonModule
  ]
})

export class CourseModule { }
