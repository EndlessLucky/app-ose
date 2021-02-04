import { Component, OnInit } from '@angular/core';

import { UserTable } from './../../../../core/models/user-table';
import { UserService } from './../../../../core/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  msgs = [];

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.msgs.push({severity: 'warn', summary: 'IMPORTANTE',
      detail: 'Los administradores recibiran las ordenes de pago y facturas enviadas por NUBEFACT'});
  }

}
