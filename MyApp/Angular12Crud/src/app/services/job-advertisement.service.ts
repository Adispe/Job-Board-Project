import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job_advertisement } from '../models/job-advertisement.model';

const baseUrl = 'http://localhost:8080/api/job_advertisement';

@Injectable({
  providedIn: 'root',
})
export class JobAdvertisementService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Job_advertisement[]> {
    return this.http.get<Job_advertisement[]>(baseUrl);
  }

  get(id: any): Observable<Job_advertisement> {
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

  findByTitle(name: any): Observable<Job_advertisement[]> {
    return this.http.get<Job_advertisement[]>(`${baseUrl}?name=${name}`);
  }
}
