import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-workshop-delete-modal',
  templateUrl: './workshop-delete-modal.component.html',
  styleUrls: ['./workshop-delete-modal.component.scss']
})
export class WorkshopDeleteModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WorkshopDeleteModalComponent>) { }

  ngOnInit(): void {
  }

  close(remove = false) {
    this.dialogRef.close(remove);
  }

}
