import { Component } from '@angular/core';
import { AdminPresenter } from './admin.presenter';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ AdminPresenter ]
})
export class AdminComponent {

  constructor(public presenter: AdminPresenter) { }

}
