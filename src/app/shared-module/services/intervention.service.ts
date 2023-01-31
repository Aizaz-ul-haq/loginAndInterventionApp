import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http: HttpClient) { }
  public getInterventions():Observable<any> {
    return this.http.get('http://localhost:8080/intervention/intervention').pipe(
      map((response: any) => {
        return response;
      })
    )
  }
}
