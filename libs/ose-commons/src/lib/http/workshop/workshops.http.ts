import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'apps/ose/src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OseWorkshopsHttpModule } from './workshops.module';
import { WorkshopItemResponse, Workshop } from '../../models';
import { WorkshopRequest } from '../../models/workshop.model';
import { IWorkshopReport } from '../../interfaces/workshop-report.interface';

@Injectable({
    providedIn: OseWorkshopsHttpModule
})
export class OseWorkshopsHttp {

  private api = `${environment.api}/workshops`;

  constructor(private http: HttpClient) {}

  getAllPortal(): Observable<Workshop[]> {
    return this.http.get<WorkshopItemResponse[]>(`${this.api}/portal`)
    .pipe(
        map((workshopsResponse: WorkshopItemResponse[]) => {
            return workshopsResponse.map((workshopItemResponse: WorkshopItemResponse) =>  {
                return new Workshop(workshopItemResponse);
            });
        })
    );
  }

  getAll(): Observable<Workshop[]> {
    return this.http.get<WorkshopItemResponse[]>(`${this.api}`)
    .pipe(
        map((workshopsResponse: WorkshopItemResponse[]) => {
            return workshopsResponse.map((workshopItemResponse: WorkshopItemResponse) =>  {
                return new Workshop(workshopItemResponse);
            });
        })
    );
  }

  getOne(workshopId: string): Observable<Workshop> {
    return this.http.get<WorkshopItemResponse>(`${this.api}/${workshopId}`)
    .pipe(
        map((workshopResponse: WorkshopItemResponse) => {
          return new Workshop(workshopResponse);
        })
    );
  }

  create(body: WorkshopRequest) {
    return this.http.post(`${this.api}`, body);
  }

  update(workshopId: string, body: WorkshopRequest) {
    return this.http.put(`${this.api}/${workshopId}`, body);
  }

  delete(workshopId: string) {
    return this.http.delete(`${this.api}/${workshopId}`);
  }

  updatePoster(workshopId: string, poster: File): Observable<string> {
    const body = new FormData();
    body.set('poster', poster);

    return this.http.put<{ poster: string }>(`${this.api}/${workshopId}/poster`, body)
    .pipe(
      map( (originalResponse) => originalResponse.poster )
    );
  }

  getReport(start?: string, end?: string): Observable<IWorkshopReport[]> {
    let params = new HttpParams();
    if (start) { params = params.append('start', start); }
    if (end) { params = params.append('end', end); }
    return this.http.get<IWorkshopReport[]>(`${this.api}/participants`, { params });
  }
}
