import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OseInputFileComponent } from './input-file.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [OseInputFileComponent],
  exports: [OseInputFileComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class OseInputFileModule { }
