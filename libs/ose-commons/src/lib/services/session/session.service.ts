import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OseSessionModule } from './session.module';
import { OseCryptoService } from '../crypto/crypto.service';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: OseSessionModule
})
export class OseSession {
  private key = 'token';
  private helper = new JwtHelperService();

  get token() {
    const encrypted = sessionStorage.getItem(this.key);
    return this.crypto.decrypt(encrypted);
  }

  set token(value: string) {
    const encrypted = this.crypto.encrypt(value);
    sessionStorage.setItem(this.key, encrypted);
  }

  get user(): User {
    const jwt = this.helper.decodeToken(this.token);
    return new User(jwt);
  }

  get isAuthenticated() {
    if (this.token) {
      return !this.helper.isTokenExpired(this.token);
    }

    return false;
  }

  constructor(private crypto: OseCryptoService) {
  }

  create(token: string) {
    this.token = token;
  }

  destroy() {
    sessionStorage.removeItem(this.key);
  }


}
