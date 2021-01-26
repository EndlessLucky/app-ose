import { Injectable } from '@angular/core';
import { HttpModule } from './http.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/ose/src/environments/environment';
import { InstructorResponse, Instructor } from '../../models/instructor.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: HttpModule
})
export class InstructorsHttp {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Instructor[]> {
    return this.http.get<InstructorResponse[]>(`${environment.api}/instructors`)
    .pipe(
      map((instructorsRes: InstructorResponse[]) => {
        return instructorsRes.map((intructorRes: InstructorResponse) => {
          return new Instructor(intructorRes);
        });
      })
    );
  }

}
