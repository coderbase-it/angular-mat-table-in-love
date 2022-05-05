import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'the-mat-table',
  template: `
  <div class="action-bar">
  <ng-content select="ng-container[action-bar-items]"></ng-content>
</div>
<ng-content></ng-content>
`,
  styleUrls: ['./the-mat-table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TheMatTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
