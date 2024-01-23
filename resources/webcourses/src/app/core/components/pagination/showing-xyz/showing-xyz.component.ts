import { Component, Input } from '@angular/core';

@Component({
  selector: 'wngx-showing-xyz',
  templateUrl: './showing-xyz.component.html',
  styleUrls: ['./showing-xyz.component.scss'],
  standalone: true
})
export class ShowingXyzComponent {
  @Input() codeUses: any
}
