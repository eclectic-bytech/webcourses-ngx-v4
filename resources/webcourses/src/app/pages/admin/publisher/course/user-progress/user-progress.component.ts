import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config/config.service';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.sass']
})
export class UserProgressComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.httpClient.get<any[]>(
      `${this.configService.params.api.route}/admin/publisher/course/user-progress/${this.pid}`
    ).subscribe(
      (data) => {
        console.log(data)
        console.log('aaa')
      }
    )
  }

  get pid() {
    return this.route.snapshot.paramMap.get('pid')
  }

}
