import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'Ose-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OseInputFileComponent),
      multi: true
    }
  ]
})
export class OseInputFileComponent {
  value: File;
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => { };

  get fileName() {
    return this.value ? this.value.name : 'Ningun archivo seleccionado';
  }

  onFileChange(e) {
    if (e.target.files.length > 0) {
      this.onInput(e.target.files[0]);
    }
  }

  onInput(value: File) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: File): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
