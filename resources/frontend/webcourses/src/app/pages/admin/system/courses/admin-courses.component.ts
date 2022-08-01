import { Component, OnInit } from '@angular/core'
import { AdminCoursesService } from './admin-courses.service'
import { faUsers, faThLarge } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.sass']
})
export class AdminCoursesComponent implements OnInit {

  faUsers = faUsers
  faThLarge = faThLarge

  constructor(
    public adminCoursesService: AdminCoursesService
  ) { }

  ngOnInit() {

    this.adminCoursesService.getAllCourses()
      .subscribe ( allCourses => {
        this.adminCoursesService.courses = allCourses
      })
  }

}
