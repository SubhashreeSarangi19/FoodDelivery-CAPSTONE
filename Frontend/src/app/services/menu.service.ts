import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  spicy: boolean;
  rating: number;
  reviews: number;
  description: string;
  image: string;
  customizable: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) {}

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }

  // addMenuItem(newItem: MenuItem): Observable<MenuItem> {
  //   return this.http.post<MenuItem>(this.apiUrl, newItem);
  // }
}
