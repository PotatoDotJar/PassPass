import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from 'src/app/app.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  constructor(private http: HttpClient) { }

  refreshForecast(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(environment.apiHost + "/weatherforecast");
  }
}
