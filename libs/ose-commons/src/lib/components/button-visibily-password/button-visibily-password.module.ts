import { NgModule } from '@angular/core';
import { OseButtonVisibilyPasswordComponent } from './button-visibily-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [OseButtonVisibilyPasswordComponent],
  exports: [OseButtonVisibilyPasswordComponent],
  imports: [
    MatButtonModule,
    MatIconModule
  ]
})
export class OseButtonVisibilyPasswordModule { }
