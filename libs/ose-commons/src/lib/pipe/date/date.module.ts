import { NgModule } from '@angular/core';
import { OseDatePipe } from './date.pipe';

@NgModule({
  declarations: [OseDatePipe],
  exports: [OseDatePipe]
})
export class OseDatePipeModule { }
