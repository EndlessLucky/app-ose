import { Component, OnInit } from '@angular/core';

interface Months {
  name: string;
  code: string;
}
interface Period {
  name: string;
  code: string;
}
interface Year {
  name: string;
  code: string;
}
interface Filter{
  name: string;
  code: string;
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  msgs = [];

  month: Months[];
  selectedMonthStart: Months;
  selectedMonthEnd: Months;

  period: Period[];
  selectedPeriodStart: Period;
  selectedPeriodEnd: Period;

  year: Year[];
  selectedYearStart: Year;
  selectedYearEnd: Year;

  constructor() { }

  ngOnInit() {
    this.msgs.push({severity: 'warn', summary: 'IMPORTANTE', detail: 'No existen registros'});

    this.month = [
      {name: '1', code: 'Jan'},
      {name: '2', code: 'Feb'},
      {name: '3', code: 'Mar'},
      {name: '4', code: 'Apr'},
      {name: '5', code: 'May'},
      {name: '6', code: 'Jun'},
      {name: '7', code: 'Jul'},
      {name: '8', code: 'Aug'},
      {name: '9', code: 'Sep'},
      {name: '10', code: 'Oct'},
      {name: '11', code: 'Nov'},
      {name: '12', code: 'Dec'},
    ];
    this.period = [
      { name: 'enero', code: 'from' },
      { name: 'diciemb', code: 'to' }
    ];
    this.year = [
      { name: '2020', code: '2020' },
      { name: '2021', code: '2021' },
      { name: '2022', code: '2022' }
    ];
  }

}
