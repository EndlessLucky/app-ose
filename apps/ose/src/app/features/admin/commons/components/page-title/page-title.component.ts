import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  @Input() icon: string;
  @Input() title: string;
  @Output() add: EventEmitter<void> = new EventEmitter<void>();
}
