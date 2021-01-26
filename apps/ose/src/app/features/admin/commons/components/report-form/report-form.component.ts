import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkshopReportData } from '../../../models/workshop-report-data.model';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent {
  @Output() search: EventEmitter<WorkshopReportData> = new EventEmitter<WorkshopReportData>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      start: [ null, Validators.required ],
      end: null
    });
  }

  send() {
    if (this.form.invalid) { return; }
    const data = new WorkshopReportData(this.form.value);
    this.search.emit(data);
  }
}
