import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ConfigService } from 'src/app/core/services/config/config.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { FadeInOut2 } from 'src/app/core/animations/fade-in-out-2.animation'

@Component({
  selector: 'app-discount-codes-users',
  templateUrl: './discount-codes-users.component.html',
  styleUrls: ['./discount-codes-users.component.sass'],
  animations: [FadeInOut, FadeInOut2]
})
export class DiscountCodesUsersComponent implements OnInit {

  public discountCodeUsers: any | null = null

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.selectPage(1)
  }

  selectPage(Destiny: Number) {
    if (this.discountCodeUsers) {
      if (Destiny > this.discountCodeUsers.code_uses.last_page) {
        Destiny = this.discountCodeUsers.code_uses.last_page
      }
    }
    this.httpClient.get<any[]>(
      `${this.configService.params.api.route}/admin/publisher/access-codes/${this.code_id}/users?page=${Destiny}`
    ).subscribe(
      (data) => {
        this.discountCodeUsers = data
      }
    )
  }

  get code_id() {
    return this.route.snapshot.paramMap.get('code_id')
  }

}
