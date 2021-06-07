import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/v.1/tasks'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any>{
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
}
