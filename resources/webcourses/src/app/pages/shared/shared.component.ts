import { Component, OnInit, OnDestroy } from '@angular/core';
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  animations: [FadeInOut],
  styleUrls: ['./shared.component.sass']
})
export class SharedComponent implements OnInit, OnDestroy {
  htmlContent: string
  private paramMapSubscription: Subscription;

  constructor(
    private httpClient: HttpClient,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paramMapSubscription = this._activatedRoute.paramMap.subscribe(params => {
      let selectedPage = params.get('page') || 'about'
      if (selectedPage == 'getstarted') {
        selectedPage = 'publish'
      }
      this.httpClient.get(
        '/webcourses/publisher-files/default/html/pages/' + selectedPage + '.html', { responseType: 'text' }
      ).subscribe(htmlContent => {
        this.htmlContent = htmlContent
      })
    });
  }
  ngOnDestroy(): void {
    this.paramMapSubscription.unsubscribe();
  }
}
