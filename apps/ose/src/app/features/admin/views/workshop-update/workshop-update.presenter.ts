import { Injectable } from '@angular/core';
import { InstructorsHttp } from '../../commons/http/instructors.http';
import { MatDialog } from '@angular/material/dialog';
import { OseLoadingComponent } from '@ose/commons/components';
import { Instructor } from '../../models/instructor.model';
import { finalize } from 'rxjs/operators';
import { OseWorkshopsHttp } from '@ose/commons/http';
import { WorkshopRequest } from '@ose/commons/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Workshop } from '@ose/commons/models';
import { forkJoin } from 'rxjs';

@Injectable()
export class WorkshopUpdatePresenter {

  instructors: Instructor[] = [];
  workshop: Workshop;
  workshopId: string;

  constructor(
    private instructorsHttp: InstructorsHttp,
    private workshopsHttp: OseWorkshopsHttp,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  initial() {
    this.workshopId = this.route.snapshot.paramMap.get('id');

    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });

    forkJoin({
      instructors: this.instructorsHttp.getAll(),
      workshop: this.workshopsHttp.getOne(this.workshopId)
    })
    .pipe(finalize(() => loading.close()))
    .subscribe(
      ({ instructors, workshop }) => {
        this.instructors = instructors;
        this.workshop = workshop;
      },
      (err) => {
        console.log(err);
      }
    );
    /*
    forkJoin([
      this.instructorsHttp.getAll(),
      this.workshopsHttp.getOne(workshopId)
    ])
    .pipe(finalize(() => loading.close()))
    .subscribe(
      ([ instructors, workshop ]) => {
        this.instructors = instructors;
        this.workshop = workshop;
      }
    );
    */

  }


  updateWorkshop(body: WorkshopRequest) {
    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
    this.workshopsHttp.update(this.workshopId, body)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => this.goWorkshops());
  }

  updateWorkshopPoster(poster: File) {
    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
    this.workshopsHttp.updatePoster(this.workshopId, poster)
    .pipe(finalize(() => loading.close()))
    .subscribe(realitveUrl => {
      this.workshop.updatePoster(realitveUrl);
    });
  }

  goWorkshops() {
    this.router.navigateByUrl('/administrador/talleres');
  }
}
