import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Instructor } from '../../../models/instructor.model';
import { WorkshopRequest } from '@ose/commons/models';
import { Workshop } from '@ose/commons/models';

@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.scss']
})
export class WorkshopFormComponent implements OnInit, OnChanges {
  @Input() workshop: Workshop;
  @Input() instructors: Instructor[] = [];
  @Output() save: EventEmitter<WorkshopRequest> = new EventEmitter<WorkshopRequest>();
  form: FormGroup;

  get nameField() {
    return this.form.get('name') as FormControl;
  }

  get nameErrors() {
    if (this.nameField.hasError('required')) {
      return 'Este campo es requerido';
    }

    return '';
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      instructor: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      start: ['', Validators.required],
      startMeridiem: ['pm', Validators.required],
      end: ['', Validators.required],
      endMeridiem: ['pm', Validators.required],
    });
  }

  ngOnInit() {
    console.log(this.workshop);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.workshop?.currentValue) {
      this.updateFormValues(changes.workshop.currentValue);
    }
  }

  updateFormValues(workshop: Workshop) {
    this.form.patchValue({
      instructor: workshop.instructor.id,
      name: workshop.name,
      description: workshop.description,
      date: workshop.date,
      start: workshop.start,
      startMeridiem: workshop.startMeridiem,
      end: workshop.end,
      endMeridiem: workshop.endMeridiem
    });
  }

  send() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }


}
