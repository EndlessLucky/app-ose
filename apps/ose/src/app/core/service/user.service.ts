import { Injectable } from '@angular/core';

import { UserTable } from './../models/user-table';
import { LocalTable } from './../models/local-table';
import { ApiTable } from './../models/api-table';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiTables: ApiTable[] = [
    {
      local: 'LOCAL PRINCIPAL',
      description: 'PRINCIPAL',
      ruta: 'https://api.nubefact.com/api/v1/6753edc2-bc9c-411c-8c',
      token: '609eefb73ed242a88d51b757a0fc6e2b036abd5824874'
    }
  ];

  userTables: UserTable[] = [
    {email: 'vbarrantes@consoricodhmont.com', name: 'Victor Barrantes', phone: '940373201', admin: 'pi pi-times',
            active: 'pi pi-check', local: 'LOCAL PRINCIPAL'},
    {email: 'vitariomeza86@gmail.com', name: 'ELIZABETH HURTADO', phone: '941493377', admin: 'pi pi-check',
            active: 'pi pi-check', local: 'LOCAL PRINCIPAL'},
  ];
  user: any;

  localTables: LocalTable[] = [
    {
      codigo: '001',
      description: 'LOCAL PRINCIPAL COD.SUNAT:',
      inei: '150141',
      department: '15 LIMA',
      province: '1501 LIMA',
      distrito: 'SURQUILLO',
      exacta: 'AV.ANGAMOS ESTE NRO.1648 DPTO.404',
      tipos: 'FACTURA ELECTRONICA\n' +
              'NOTA DE CREDITO ELECTRONICA\n' +
              'NOTA DE DEBITO ELECTRONICA\n' +
              'BOLETA DE VENTA ELECTRONICA\n' +
              'NOTA DE CREDITO ELECTRONICA\n' +
              'NOTA DE DEBITO ELECTRONICA\n' +
              'COMPROBANTE DE RETENCION ELECTRONICA\n' +
              'COMPROBANTE DE PERCEPCION ELECTRONICA\n' +
              'GUIA DE REMISION REMITENTE ELECTRONICA\n' +
              'FACTURA ELECTRONICA[Contigencia]\n' +
              'NOTA DE CREDITO ELECTRONICA[Contigencia]\n' +
              'NOTA DE DEBITO ELECTRONICA[Contigencia]\n' +
              'BOLETA DE VENTA ELECTRONICA[Contigencia]\n' +
              'NOTA DE CREDITO ELECTRONICA[Contigencia]\n' +
              'NOTA DE DEBITO ELECTRONICA[Contigencia]',
      offline:  'FFF1\n' +
                'FFF1\n' +
                'FFF1\n' +
                'BBB1\n' +
                'BBB1\n' +
                'BBB1\n' +
                'PPP1\n' +
                'TTT1\n' +
                '0001\n' +
                '0001\n' +
                '0001\n' +
                '0001\n' +
                '0001\n' +
                '0001\n'
    }
  ];

  constructor() { }

  getUserByPhone(phone): void {
    this.user = this.userTables.filter(x => x.phone === phone);
  }

}
