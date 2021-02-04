import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { UserService } from './../../../../core/service/user.service';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit, OnDestroy {

  private unsbscribeAll: Subject<any> = new Subject<any>();
  configuration = [true, false, false, true];

  constructor(
    private route: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      takeUntil(this.unsbscribeAll)
    ).subscribe(params => {
      this.userService.getUserByPhone(params.phone);
    });
  }

  ngOnDestroy(): void {
    this.unsbscribeAll.next();
    this.unsbscribeAll.complete();
  }
}
