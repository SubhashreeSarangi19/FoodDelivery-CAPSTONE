import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, { email, password });
  }

  adminLogin(adminEmail: string, adminPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/login`, { adminEmail, adminPassword });
  }

  register(email: string, password: string, username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/register`, {
      email,
      password,
      username,
    });
  }

  storeToken(token: string): void {
    console.log('Storing token:', token); 
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('jwtToken');
    console.log('Retrieved token:', token);  
    return token;
  }
}
