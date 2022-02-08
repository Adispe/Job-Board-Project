import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job_application } from '../models/job-application.model';

const baseUrl = 'http://localhost:8080/api/job_application';

@Injectable({
  providedIn: 'root',
})
export class JobApplicationService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Job_application[]> {
    return this.http.get<Job_application[]>(baseUrl);
  }

  get(id: any): Observable<Job_application> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Job_application[]> {
    return this.http.get<Job_application[]>(`${baseUrl}?name=${name}`);
  }
}
