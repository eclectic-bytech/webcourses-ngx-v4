import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-discount-codes-users',
  templateUrl: './discount-codes-users.component.html',
  styleUrls: ['./discount-codes-users.component.sass'],
  animations: [FadeInOut]
})
export class DiscountCodesUsersComponent implements OnInit {

  public discountCodeUsers$: Subject<any> = new Subject<any>()
  public itemsPerPage: number = 25 // This will make it easier to change collection size in the future

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.getDiscountCodeUsers()
  }

  getDiscountCodeUsers(page: number = 1) {
    this.httpClient.get<any[]>(
      `${this.configService.params.api.route}/admin/publisher/access-codes/${this.code_id}/users?page=${page}`
    ).subscribe(
      (data) => {
        this.discountCodeUsers$.next(data); // Emit the new data using the subject
      }
    )
  }

  get code_id() {
    return this.route.snapshot.paramMap.get('code_id')
  }

}
