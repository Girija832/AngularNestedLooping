import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeeListService {

  constructor(private http: HttpClient) { }
  public getEmpList(): Observable<any> {
    // return this.http.get('https://api.github.com/users');
    // return this.http.get('http://girija4u.com/dummydata.json');
    return this.http.get('./assets/dummydata.json');
  }
}
