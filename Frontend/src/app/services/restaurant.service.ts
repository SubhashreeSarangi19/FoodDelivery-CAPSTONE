import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Restaurant {
  id: number; // Remove `| undefined`
  name: string;
  rating: number;
  isFavorite: boolean;
  imageUrl: string;
}


@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  private apiUrl = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl);
  }
}
