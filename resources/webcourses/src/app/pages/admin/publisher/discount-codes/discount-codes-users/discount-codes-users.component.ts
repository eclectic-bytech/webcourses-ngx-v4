import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-discount-codes-users',
  templateUrl: './discount-codes-users.component.html',
  styleUrls: ['./discount-codes-users.component.sass']
})
export class DiscountCodesUsersComponent implements OnInit {

  public discountCodeUsers$ = new Subject<any[] | null>()
  public total_activities = 0

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>(
      `${this.configService.params.api.route}/admin/publisher/access-codes/${this.code_id}/users`
    ).subscribe(
      (data) => {
        this.discountCodeUsers$.next(data)
      }
    )
  }

  get code_id() {
    return this.route.snapshot.paramMap.get('code_id')
  }

}
