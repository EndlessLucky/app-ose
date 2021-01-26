import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OseLoadingComponent } from './loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [OseLoadingComponent],
  exports: [OseLoadingComponent],
  // entryComponents: [OseLoadingComponent], // solo para versiones anteriores a angular 9
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class OseLoadingModule { }
