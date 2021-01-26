import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/ose/src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OseParticipantHttpModule } from './participant.module';

@Injectable({
    providedIn: OseParticipantHttpModule
})
export class OseParticipantHttp {

  private api = `${environment.api}/participants`;

  constructor(private http: HttpClient) {}

  register(workshopId: string, register: boolean): Observable<void> {
    return this.http.post<void>(`${this.api}`, { workshop: workshopId, register });
  }

}
