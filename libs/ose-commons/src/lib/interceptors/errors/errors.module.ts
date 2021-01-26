import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OseErrorsInterceptor } from './errors.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OseErrorsInterceptor,
      multi: true
    }
  ],
  imports: [
    MatSnackBarModule
  ]
})
export class OseErrorsInterceptorModule { }
