import { Component, HostBinding } from '@angular/core';
import { OseThemeService } from '@ose/commons/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class')

  get attrClass() {
    return this.themeService.theme;
  }

  constructor(
    private themeService: OseThemeService,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

}
