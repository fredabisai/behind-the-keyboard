import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  url = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {}
  noAuthHeader = new HttpHeaders({ 'No-Auth': 'True' });
  private logger = new BehaviorSubject(true);
  loggerItem = this.logger.asObservable();

  getToken(): string {
    return sessionStorage.getItem('token');
  }
  login(data) {
    return this.http.post(this.url + 'user/login', data, {
      headers: this.noAuthHeader
    });
  }
  changeLoginStatus(newValue: boolean) {
    this.logger.next(newValue);
  }
}
