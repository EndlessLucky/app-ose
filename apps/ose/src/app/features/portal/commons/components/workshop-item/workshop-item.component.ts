import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workshop } from '@ose/commons/models';

@Component({
  selector: 'app-workshop-item',
  templateUrl: './workshop-item.component.html',
  styleUrls: ['./workshop-item.component.scss']
})
export class WorkshopItemComponent implements OnInit {
  @Input() workshop: Workshop;
  @Output() join: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
