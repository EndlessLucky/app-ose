import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { WorkshopReportData } from '../../../models/workshop-report-data.model';
import { AdminItem } from '../../../../../core/models/admin-item';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.scss']
})
export class ReportFormComponent {
  @Output() search: EventEmitter<WorkshopReportData> = new EventEmitter<WorkshopReportData>();
  form: FormGroup;

  adminItems: AdminItem[] = [
    {icon: 'pi pi-shopping-cart', name: 'Punto de Venta'},
    {icon: 'pi pi-folder', name: 'Comprobantes'},
    {icon: 'pi pi-credit-card', name: 'Catálogo'},
    {icon: 'pi pi-briefcase', name: 'Entidades'},
    {icon: 'pi pi-flag', name: 'Guías de Remisión'},
    {icon: 'pi pi-globe', name: 'Compras'},
    {icon: 'pi pi-file', name: 'Retenciones'},
    {icon: 'pi pi-file', name: 'Percepciones'},
    {icon: 'pi pi-file', name: 'Resúmenes de Boletas'},
    {icon: 'pi pi-globe', name: 'Configuración Principal'},
    {icon: 'pi pi-users', name: 'Usuaríos'},
    {icon: 'pi pi-wallet', name: 'Locales y Series'},
    {icon: 'pi pi-envelope', name: 'Cuentas Bancarias'},
    {icon: 'pi pi-download', name: 'Api (Integración)'},
    {icon: 'pi pi-user', name: 'Mi Cuenta'}
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      start: [ null, Validators.required ],
      end: null
    });
  }

  send() {
    if (this.form.invalid) { return; }
    const data = new WorkshopReportData(this.form.value);
    this.search.emit(data);
  }
}
