import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

export interface MyData {
  id: number;
  title: string;
}


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) {}

  getData(): Observable<MyData[]> {
    return this.http.get<MyData[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
