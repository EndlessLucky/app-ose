import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workshop } from '@ose/commons/models';

@Component({
  selector: 'app-workshops-table',
  templateUrl: './workshops-table.component.html',
  styleUrls: ['./workshops-table.component.scss']
})
export class WorkshopsTableComponent implements OnInit {
  @Input() displayedColumns: string[] = ['title', 'instructor', 'date', 'start', 'end', 'edit', 'remove'];
  @Input() dataSource: Workshop[] = [];
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
