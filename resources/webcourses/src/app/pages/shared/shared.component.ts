import { Component, OnInit, OnDestroy } from '@angular/core'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  animations: [FadeInOut],
  styleUrls: ['./shared.component.sass']
})
export class SharedComponent implements OnInit, OnDestroy {
  private sub: Subscription
  public htmlContent: string

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe( params => {
      // home page is at app root ("no path") and is titled 'about'
      let selectedPage = (params.get('page')) ? (params.get('page')) : 'about'
      this.loadPage( selectedPage === 'getstarted' ? 'publish' : selectedPage )
    })
  }

  loadPage(selectedPage: string) {
    this.httpClient.get(
      `/webcourses/publisher-files/1/html/pages/${selectedPage}.html`, { responseType: 'text' }
    ).subscribe( htmlContent => {
      this.htmlContent = htmlContent
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
