import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Results {
  data: any;
  departments: any;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get<Results>(this.url + 'questions');
  }
  addQuestion(data) {
    return this.httpClient.post<Results>(this.url + 'question/add', data);
  }
}
