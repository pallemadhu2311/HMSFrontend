import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private isUserLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
    isUserLoggedIn$: Observable<boolean> = this.isUserLoggedInSubject.asObservable();

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as const, // Specify the type explicitly
    };
    return this.http.post(`${this.baseUrl}/login`, body, httpOptions);
  }

  setLoggedIn(value: boolean) {
    this.isUserLoggedInSubject.next(value);
    console.log("isUserLoggedInSubject",this.isUserLoggedInSubject);
  }

  isUserLoggedIn(): boolean {
    // Implement the logic to check if the user is logged in
    // For example, you can check if there's a user profile in localStorage
    const userProfileString = localStorage.getItem('userProfile');
    return userProfileString !== null;
  }
}
