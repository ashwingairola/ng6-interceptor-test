import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getApiData1(): Observable<object> {
    return this.http.get('https://reqres.in/api/users/2') // Valid URL with a JSON response
    .pipe(
      map((result) => {
        console.log(result);
        return result;
      })
    );
  }

  getApiData2(): Observable<object> {
    return this.http.get('https://httpstat.us/500') // Simulating an Internal Server Error
    .pipe(
      map((result) => result)
    );
  }

  getApiData3(): Observable<object> {
    return this.http.get('https://httpstat.us/502') // Simulating a Bad Gateway error
    .pipe(
      map((result) => result)
    )
  }

  getApiData4(): Observable<object> {
    return this.http.get('https://httpstat.us/503') // Simulating a Service Unavailable error
    .pipe(
      map((result) => result)
    )
  }
}
