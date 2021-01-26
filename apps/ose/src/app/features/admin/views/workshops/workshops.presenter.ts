import { Injectable } from '@angular/core';
import { OseWorkshopsHttp } from '@ose/commons/http';
import { MatDialog } from '@angular/material/dialog';
import { OseLoadingComponent } from '@ose/commons/components';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WorkshopDeleteModalComponent } from '../../commons/components/workshop-delete-modal/workshop-delete-modal.component';
import { deleteElementList } from '@ose/commons/utils';

@Injectable()
export class WorkshopsPresenter {
  dataSource = [];

  constructor(
    private workshopsHttp: OseWorkshopsHttp,
    private dialog: MatDialog,
    private router: Router
  ) {}

  loadWorkshops() {
    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
    this.workshopsHttp.getAll()
    .pipe(finalize(() => loading.close()))
    .subscribe(workshops => this.dataSource = workshops);
  }

  deleteWorkshop(workshopId: string) {
    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
    this.workshopsHttp.delete(workshopId)
    .pipe(finalize(() => loading.close()))
    .subscribe(_ => {
      this.dataSource = deleteElementList(this.dataSource, workshop => workshop.id === workshopId);
    });
  }

  goCreatePage() {
    this.router.navigateByUrl('/administrador/talleres/nuevo');
  }

  goUpdatePage(workshopId: string) {
    this.router.navigate(['/administrador/talleres/actualizar', workshopId]);
  }

  goDeleteModal(workshopId: string) {
    const modal = this.dialog.open(WorkshopDeleteModalComponent, { disableClose: true });
    modal.afterClosed().subscribe((remove: boolean) => {
      if (remove) { this.deleteWorkshop(workshopId); }
    });
  }
}
