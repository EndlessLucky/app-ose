import { Component, OnInit } from '@angular/core';
import { WorkshopUpdatePresenter } from './workshop-update.presenter';

@Component({
  selector: 'app-workshop-update',
  templateUrl: './workshop-update.view.html',
  styleUrls: ['./workshop-update.view.scss'],
  providers: [ WorkshopUpdatePresenter ]
})
export class WorkshopUpdateView implements OnInit {

  constructor(public presenter: WorkshopUpdatePresenter) { }

  ngOnInit(): void {
    this.presenter.initial();
  }

}
