import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;  // Append /auth to the base URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      map((response: any) => {
        console.log('Response from server:', response);
        if (response && response.access_token) {
          localStorage.setItem('access_token', response.access_token);
        }
        return response;
      })
    );
  }

  signUp(signUpData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, signUpData);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
