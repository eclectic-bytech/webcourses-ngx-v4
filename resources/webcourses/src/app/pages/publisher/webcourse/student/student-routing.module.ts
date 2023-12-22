import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { StudentComponent } from './student.component'
import { StudentResolver } from './student.resolver'
import { PublisherResolver } from 'src/app/pages/catalogue/publisher/publisher.resolver'

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    resolve: {
      student: StudentResolver,
      publisherInfo: PublisherResolver
    },
    data: {
      title: 'Webcourse Student'
    }
  },
]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule
  ],
  exports: [RouterModule],
  providers: [StudentResolver, PublisherResolver]
})

export class StudentRoutingModule { }
