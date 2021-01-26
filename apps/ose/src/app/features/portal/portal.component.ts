import { Component, OnInit } from '@angular/core';
import { OseThemeService } from '@ose/commons/theme';
import { OseSession, OseLangService } from '@ose/commons/services';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(
    public theme: OseThemeService,
    public session: OseSession,
    public translate: OseLangService
  ) { }

  ngOnInit(): void {
  }

}
