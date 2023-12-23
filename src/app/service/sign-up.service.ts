import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = 'http://localhost:8080/api/users'

  constructor(private http: HttpClient) { }


  registerUser(userData: any) {
    return this.http.post<User>(`${this.baseUrl}`, userData);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserProfile(username: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get(`${this.baseUrl}/profile?username=${username}`, httpOptions)
  }

}
