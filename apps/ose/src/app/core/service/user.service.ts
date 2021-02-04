import { Injectable } from '@angular/core';

import { UserTable } from './../models/user-table';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userTables: UserTable[] = [
    {email: 'vbarrantes@consoricodhmont.com', name: 'Victor Barrantes', phone: '940373201', admin: 'pi pi-times',
            active: 'pi pi-check', local: 'LOCAL PRINCIPAL'},
    {email: 'vitariomeza86@gmail.com', name: 'ELIZABETH HURTADO', phone: '941493377', admin: 'pi pi-check',
            active: 'pi pi-check', local: 'LOCAL PRINCIPAL'},
  ];
  user: any;

  constructor() { }

  getUserByPhone(phone): void {
    this.user = this.userTables.filter(x => x.phone === phone);
  }

}
