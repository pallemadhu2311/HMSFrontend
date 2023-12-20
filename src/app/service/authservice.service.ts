import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http:HttpClient) {

  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true, // Include credentials
    };
    return this.http.post(`${this.baseUrl}/login`, body, httpOptions);
  }

}
