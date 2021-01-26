import { Injectable } from '@angular/core';
import { OseThemeModule } from '@ose/commons/theme/theme.module';

@Injectable({
  providedIn: OseThemeModule
})
export class OseThemeService {
  private isDark = false;

  get theme() {
    return this.isDark ? 'dark-theme' : '';
  }

  setLightTheme() {
      this.isDark = false;
  }

  setDarkTheme() {
      this.isDark = true;
  }

}
