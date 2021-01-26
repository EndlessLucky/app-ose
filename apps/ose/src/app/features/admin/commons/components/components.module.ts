import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { WorkshopsTableComponent } from './workshops-table/workshops-table.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { WorkshopFormComponent } from './workshop-form/workshop-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkshopDeleteModalComponent } from './workshop-delete-modal/workshop-delete-modal.component';
import { WorkshopUploadPosterComponent } from './workshop-upload-poster/workshop-upload-poster.component';
import { OseDefaultImgPipeModule } from '@ose/commons/pipe';
import { OseInputFileModule } from '@ose/commons/components';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ReportFormComponent } from './report-form/report-form.component';

const COMPONENTS = [
  MenuComponent,
  WorkshopsTableComponent,
  PageTitleComponent,
  WorkshopFormComponent,
  WorkshopDeleteModalComponent,
  WorkshopUploadPosterComponent,
  ReportChartComponent,
  ReportFormComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    OseDefaultImgPipeModule,
    OseInputFileModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
