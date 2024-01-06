// HostelService
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/hostels';

  registerHostel(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, formData);
}
}
