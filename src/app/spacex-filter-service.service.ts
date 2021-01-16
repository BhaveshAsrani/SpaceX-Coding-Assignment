import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexFilterServiceService {
  private readonly spaceXAllLaunchesURL = 'https://api.spaceXdata.com/v3/launches';
  private readonly HTTP_HEADERS = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(
    private readonly http: HttpClient
  ) { }

  fetchSpacexLaunchCards(requestObj: any): Observable<any> {
    const httpOptions = {
      headers: this.HTTP_HEADERS,
      params: requestObj,
    };
    return this.http.get<any>(this.spaceXAllLaunchesURL, httpOptions);
  }
}
