import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { ConfigService } from 'src/app/core/services/config/config.service'

import { CourseService } from 'src/app/pages/catalogue/course/course.service'

@Component({
  selector: 'app-add-access-code',
  templateUrl: './add-access-code.component.html',
  styleUrls: ['./add-access-code.component.scss'],
  animations: [FadeInOut, FadeInOut2]
})

export class AddAccessCodeComponent {

  public numberOfSeats: FormControl

  public course$ = this.courseService.getCourse(
    this.route.snapshot.queryParamMap.get('cid')
  )

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private courseService: CourseService,
    private configService: ConfigService
  ) {
    this.numberOfSeats = new FormControl('50')
  }

  addCodeButton(amount: number) {
    this.httpClient.get<string>(
      `${this.configService.params.api.route}/commerce/stripe/charge/${amount}`
    ).subscribe(
      (checkoutUrl) => {
        this.router.navigateByUrl(JSON.stringify(checkoutUrl))
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
