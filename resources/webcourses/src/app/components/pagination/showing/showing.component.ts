import { Component, Input } from '@angular/core';

@Component({
  selector: 'wngx-showing',
  templateUrl: './showing.component.html',
  styleUrls: ['./showing.component.scss']
})

export class ShowingComponent {
  @Input() codeUses: any
}
