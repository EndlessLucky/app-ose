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
    {icon: 'pi pi-shopping-cart', name: 'Punto de Venta', route: ''},
    {icon: 'pi pi-folder', name: 'Comprobantes', route: 'receipt'},
    {icon: 'pi pi-credit-card', name: 'Catálogo', route: ''},
    {icon: 'pi pi-briefcase', name: 'Entidades', route: ''},
    {icon: 'pi pi-flag', name: 'Guías de Remisión', route: ''},
    {icon: 'pi pi-globe', name: 'Compras', route: ''},
    {icon: 'pi pi-file', name: 'Retenciones', route: ''},
    {icon: 'pi pi-file', name: 'Percepciones', route: ''},
    {icon: 'pi pi-file', name: 'Resúmenes de Boletas', route: ''},
    {icon: 'pi pi-globe', name: 'Configuración Principal', route: 'configuration'},
    {icon: 'pi pi-users', name: 'Usuaríos', route: 'users'},
    {icon: 'pi pi-wallet', name: 'Locales y Series', route: ''},
    {icon: 'pi pi-envelope', name: 'Cuentas Bancarias', route: ''},
    {icon: 'pi pi-download', name: 'Api (Integración)', route: ''},
    {icon: 'pi pi-user', name: 'Mi Cuenta', route: ''}
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
