import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { StudentsComponent } from './students.component'
import { StudentsResolver } from './students.resolver'
import { StudentsGroupsResolver } from './students-groups.resolver'
import { PublisherResolver } from '../../../catalogue/publisher/publisher.resolver'

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    resolve: {
      students: StudentsResolver,
      studentsGroups: StudentsGroupsResolver,
      publisherInfo: PublisherResolver
    },
    data: {
      title: 'Webcourse Students'
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
  providers: [
    StudentsResolver,
    StudentsGroupsResolver,
    PublisherResolver
  ]
})

export class StudentsRoutingModule { }
