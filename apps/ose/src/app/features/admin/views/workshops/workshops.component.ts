import { Component, OnInit } from '@angular/core';
import { WorkshopsPresenter } from './workshops.presenter';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
  providers: [ WorkshopsPresenter ]
})
export class WorkshopsComponent implements OnInit {

  constructor(public presenter: WorkshopsPresenter) { }

  ngOnInit(): void {
    this.presenter.loadWorkshops();
  }

}
