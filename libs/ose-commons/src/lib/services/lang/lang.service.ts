import { Injectable } from '@angular/core';
import { OseLangModule } from './lang.module';
import { TranslateService } from '@ngx-translate/core';
import { dayJs } from '../../utils';

@Injectable({
  providedIn: OseLangModule
})
export class OseLangService {

  constructor(private traslate: TranslateService) {}

  use(lang: string) {
    dayJs.locale(lang);
    this.traslate.use(lang);
  }

}
