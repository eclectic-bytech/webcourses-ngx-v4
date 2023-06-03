import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'

import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [FadeInOut]
})

export class PricingComponent {
  public htmlContent: string

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.httpClient.get(
      '/webcourses/publisher-files/default/html/pages/pricing.html', { responseType: 'text' }
    ).subscribe(
      htmlContent => this.htmlContent = htmlContent
    )
  }

}
