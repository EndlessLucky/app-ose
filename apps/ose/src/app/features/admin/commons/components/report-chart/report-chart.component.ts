import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { IWorkshopReport } from '@ose/commons/interfaces';

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss']
})
export class ReportChartComponent implements OnChanges {
  @Input() dataSource: IWorkshopReport[] = [];

  labels: Label[] = [];
  data: number[] = [];
  type: ChartType = 'pie';
  legend = true;
  colors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.dataSource.currentValue.length) {
      this.labels = this.dataSource.map(item => item.workshop.name);
      this.data = this.dataSource.map(item => item.participants);
    }
  }

}
