import { Injectable } from '@angular/core';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { MatDialog } from '@angular/material/dialog';
import { OseLoadingComponent } from '@ose/commons/components';
import { Instructor } from '../../models/instructor.model';
import { finalize } from 'rxjs/operators';
import { OseWorkshopsHttp } from '@ose/commons/http';
import { WorkshopRequest } from '@ose/commons/models';
import { Router } from '@angular/router';

@Injectable()
export class WorkshopCreatePresenter {

  instructors: Instructor[] = [];

  constructor(
    private instructorsHttp: InstructorsHttp,
    private workshopsHttp: OseWorkshopsHttp,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  loadInstructors() {
    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
    this.instructorsHttp.getAll()
    .pipe(finalize(() => loading.close()))
    .subscribe(instructors => this.instructors = instructors);
  }

  createWorkshop(body: WorkshopRequest) {
    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
    this.workshopsHttp.create(body)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => this.goWorkshops());
  }

  goWorkshops() {
    this.router.navigateByUrl('/administrador/talleres');
  }
}
