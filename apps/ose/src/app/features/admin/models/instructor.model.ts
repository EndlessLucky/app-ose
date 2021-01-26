export class InstructorResponse {
  // tslint:disable-next-line
  _id: string;
  fullName: string;
  mail: string;
}

export class Instructor {
  id: string;
  fullName: string;
  mail: string;

  constructor(data: InstructorResponse) {
    this.id = data._id || '';
    this.fullName = data.fullName || '';
    this.mail = data.mail || '';
  }
}
