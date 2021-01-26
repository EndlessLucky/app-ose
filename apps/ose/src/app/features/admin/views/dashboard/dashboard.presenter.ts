import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OseLoadingComponent } from '@ose/commons/components';
import { finalize } from 'rxjs/operators';
import { OseWorkshopsHttp } from '@ose/commons/http';
import { IWorkshopReport } from '@ose/commons/interfaces';
import { WorkshopReportData } from '../../models/workshop-report-data.model';

@Injectable()
export class DashboardPresenter {

  dataSourse: IWorkshopReport[] = [];

  constructor(
    private workshopsHttp: OseWorkshopsHttp,
    private dialog: MatDialog,
  ) {
  }

  loadReport(dates?: WorkshopReportData) {
    const loading = this.dialog.open(OseLoadingComponent, { disableClose: true });
    this.workshopsHttp.getReport(dates?.start, dates?.end)
    .pipe(finalize(() => loading.close()))
    .subscribe(dataSource => this.dataSourse = dataSource);
  }

}
