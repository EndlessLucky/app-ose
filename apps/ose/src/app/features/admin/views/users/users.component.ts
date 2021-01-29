import { Component, OnInit } from '@angular/core';

import { UserTable } from './../../../../core/models/user-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  msgs = [];
  userTables: UserTable[] = [
    {email: 'vbarrantes@consoricodhmont.com', name: 'Victor Barrantes', phone: '940373201', admin: 'pi pi-times', 
            active: 'pi pi-check', local: 'LOCAL PRINCIPAL'},
    {email: 'vitariomeza86@gmail.com', name: 'ELIZABETH HURTADO', phone: '941493377', admin: 'pi pi-check', active: 'pi pi-check', local: 'LOCAL PRINCIPAL'},
  ];

  constructor() { }

  ngOnInit() {
    this.msgs.push({severity: 'warn', summary: 'IMPORTANTE', 
      detail: 'Los administradores recibiran las ordenes de pago y facturas enviadas por NUBEFACT'});
  }

}
