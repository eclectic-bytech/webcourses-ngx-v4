import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { DiscountCodesService } from './discount-codes.service'
import { FadeInOut } from 'src/app/core/animations/fade-in-out.animation'
import { Router, ActivatedRoute } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-discount-codes',
  templateUrl: './discount-codes.component.html',
  styleUrls: ['./discount-codes.component.scss'],
  animations: [FadeInOut]
})
export class DiscountCodesComponent implements OnInit {

  public discountCodes$: Observable<any[]>

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private discountCodesService: DiscountCodesService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //   (params) => {
    //     console.log(params)
    //   }
    // )
    this.discountCodes$ = this.discountCodesService.getDiscountCodes(
      this.activatedRoute.snapshot.paramMap.get('cid')
    )
  }

  regLinkCopied(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000
    })
  }

  addAccessCode(cid) {
    this.router.navigateByUrl(`/admin/publisher/discount-codes/add?cid=${cid}`)
  }

  pillClass(discountCode) {
    let pill_class = "badge-success"
    if ((discountCode.uses_max - discountCode.uses) < 10 && discountCode.uses_max != 0) pill_class = "badge-warning"
    if ((discountCode.uses_max - discountCode.uses) <= 0 && discountCode.uses_max != 0) pill_class = "badge-danger"
    return pill_class
  }

}
