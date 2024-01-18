import { Component, Input } from '@angular/core'

@Component({
  selector: 'wngx-pagination-custom',
  templateUrl: './pagination-custom.component.html',
  styleUrls: ['./pagination-custom.component.scss']
})

export class PaginationCustomComponent {
  @Input() codeUses: any
}
