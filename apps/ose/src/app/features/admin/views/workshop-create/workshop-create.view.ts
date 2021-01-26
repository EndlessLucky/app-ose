import { Component, OnInit } from '@angular/core';
import { WorkshopCreatePresenter } from './workshop-create.presenter';

@Component({
  selector: 'app-workshop-create',
  templateUrl: './workshop-create.view.html',
  styleUrls: ['./workshop-create.view.scss'],
  providers: [ WorkshopCreatePresenter ]
})
export class WorkshopCreateView implements OnInit {

  constructor(public presenter: WorkshopCreatePresenter) {}

  ngOnInit(): void {
    this.presenter.loadInstructors();
  }

}
