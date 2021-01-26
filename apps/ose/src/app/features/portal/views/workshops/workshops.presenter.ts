import { Injectable } from '@angular/core';
import { OseWorkshopsHttp, OseParticipantHttp } from '@ose/commons/http';
import { Workshop } from '@ose/commons/models';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { OseSession } from '@ose/commons/services';
import { MatDialog } from '@angular/material/dialog';
import { OseLoadingComponent } from '@ose/commons/components';

@Injectable()
export class WorkshopsPresenter {

    workshops: Workshop[] = [];
    loading = true;

    constructor(
      private workshopsHttp: OseWorkshopsHttp,
      private participantsHttp: OseParticipantHttp,
      private session: OseSession,
      private router: Router,
      private dialog: MatDialog
    ) {}

    loadWorkshops() {
        this.workshopsHttp.getAllPortal()
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          workshops => this.workshops = workshops,
          err => console.log(err)
        );
    }

    joinWorkshop(workshop: Workshop) {
      if (!this.session.isAuthenticated) {
        return this.router.navigateByUrl('/autenticacion/ingresar');
      }

      const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
      this.participantsHttp.register(workshop.id, !workshop.registered)
      .pipe(finalize(() => loading.close()))
      .subscribe(_ => {
        workshop.registered = !workshop.registered;
      });

    }

}
