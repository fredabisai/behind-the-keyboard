import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  url = 'http://127.0.0.1:8000/api/';

  noAuthHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(private http: HttpClient) {}
  registerUser(data) {
    return this.http.post(this.url + 'user/register', data, {
      headers: this.noAuthHeader
    });
  }
}
