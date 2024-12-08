import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Order {
  id: string;
  dishName: string;
  amount: number;
  quantity: number;
  date: string;
  status: string;
  description: string; // Add this property
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/api/user/orders';

  constructor(private http: HttpClient) { }

  getOrderHistory(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}`);
  }

  checkoutOrder(orderData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/checkout`, orderData);
  }

}
