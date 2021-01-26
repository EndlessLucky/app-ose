import { dayJs } from '@ose/commons/utils';

export class IWorkshopReportData {
  start: Date;
  end?: Date;
}
export class WorkshopReportData {
  start: string;
  end: string;

  constructor(data: IWorkshopReportData) {
    this.start = dayJs(data.start).format('YYYY-MM-DD');
    this.end = (data?.end) ? dayJs(data.end).format('YYYY-MM-DD') : null;
  }
}
