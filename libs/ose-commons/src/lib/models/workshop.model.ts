import { environment } from 'apps/ose/src/environments/environment';

export interface WorkshopRequest {
  instructor: string;
  name: string;
  description: string;
  date: Date;
  start: number;
  startMeridiem: string;
  end: number;
  endMeridiem: string;
}

export interface WorkshopItemResponse {
  _id: string;
  instructor: {
    _id: string;
    fullName: string;
  };
  name: string;
  description: string;
  date: Date;
  start: number;
  startMeridiem: string;
  end: number;
  endMeridiem: string;
  publish: boolean;
  poster: string;
  registered?: boolean;
}

export class Workshop {
  id: string;
  instructor: {
    id: string;
    fullName: string;
  };
  name: string;
  description: string;
  date: Date;
  start: number;
  startMeridiem: string;
  end: number;
  endMeridiem: string;
  publish: boolean;
  poster: string;
  registered?: boolean;

  constructor(data: WorkshopItemResponse) {
      this.id = data._id || '';
      this.instructor = data.instructor ? {
        fullName: data.instructor.fullName,
        id: data.instructor._id
      } : {
        fullName: '',
        id: ''
      };
      this.name = data.name;
      this.description = data.description;
      this.date = data.date;
      this.start = data.start;
      this.startMeridiem = data.startMeridiem;
      this.end = data.end;
      this.endMeridiem = data.endMeridiem;
      this.publish = data.publish;
      this.poster = data.poster ? `${environment.api}${data.poster}` : '';
      this.registered = data.registered;
  }

  get timeDisplay() {
      return `Hora ${this.startDisplay} a ${this.endDisplay}`;
  }

  get instructorDisplay() {
      return this.instructor.fullName;
  }

  get startDisplay() {
      return `${this.start} ${this.startMeridiem}`;

  }

  get endDisplay() {
      return `${this.end} ${this.endMeridiem}`;
  }

  updatePoster(relativeUrl: string) {
    this.poster = `${environment.api}${relativeUrl}`;
  }

}
