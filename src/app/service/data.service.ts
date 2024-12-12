import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  async getPosts(): Promise<any[]> {
    return lastValueFrom(this.http.get<any[]>(this.apiUrl));
  }

  fetchuser() {
    return lastValueFrom(
      this.http.get('https://jsonplaceholder.typicode.com/users')
    );
  }
}
