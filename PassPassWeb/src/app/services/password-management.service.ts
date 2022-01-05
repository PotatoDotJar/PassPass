import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PasswordRecord, PasswordSaveModel, PasswordSaveResult } from '../app.models';

@Injectable({
  providedIn: 'root'
})
export class PasswordManagementService {

  constructor(private http: HttpClient) { }

  get(id: string): Observable<PasswordRecord | null> {
    if(!id)
      return of(null);
    return this.http.get<PasswordRecord>(environment.apiHost + `/PasswordManagement/${id}`);
  }

  save(model: PasswordSaveModel): Observable<PasswordSaveResult> {
    return this.http.post<PasswordSaveResult>(environment.apiHost + "/PasswordManagement/Save", model);
  }

}
