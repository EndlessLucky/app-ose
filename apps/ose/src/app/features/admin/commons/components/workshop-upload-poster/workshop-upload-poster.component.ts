import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-workshop-upload-poster',
  templateUrl: './workshop-upload-poster.component.html',
  styleUrls: ['./workshop-upload-poster.component.scss']
})
export class WorkshopUploadPosterComponent implements OnInit {
  @Input() poster: string;
  @Output() selected: EventEmitter<File> = new EventEmitter<File>();

  file: File;

  constructor() { }

  ngOnInit(): void {
  }

}
