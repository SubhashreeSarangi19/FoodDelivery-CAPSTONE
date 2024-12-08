import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Restaurant, RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [RouterLink, CommonModule, NgForOf],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = [];
  wishlistedRestaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants(); // Load restaurants from the backend
    this.loadWishlist(); // Load wishlist from localStorage
  }

  loadRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe({
      next: (data) => {
        this.restaurants = data;
        this.updateRestaurantFavorites(); // Sync favorites with wishlist
      },
      error: (err) => {
        console.error('Error fetching restaurants:', err);
        alert('Failed to load restaurants. Please try again later.');
      },
    });
  }

  loadWishlist(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const storedWishlisted = localStorage.getItem('wishlistedRestaurants');
      if (storedWishlisted) {
        this.wishlistedRestaurants = JSON.parse(storedWishlisted);
      }
    }
  }

  updateRestaurantFavorites(): void {
    this.restaurants.forEach((restaurant) => {
      restaurant.isFavorite = this.wishlistedRestaurants.some(
        (wishlisted) => wishlisted.id === restaurant.id
      );
    });
  }

  toggleWishlist(restaurantId: number): void {
    const restaurant = this.restaurants.find((r) => r.id === restaurantId);
    if (restaurant) {
      restaurant.isFavorite = !restaurant.isFavorite;
      if (restaurant.isFavorite) {
        this.addToWishlist(restaurant);
      } else {
        this.removeFromWishlist(restaurant);
      }
    }
  }

  addToWishlist(restaurant: Restaurant): void {
    if (!this.wishlistedRestaurants.some((r) => r.id === restaurant.id)) {
      this.wishlistedRestaurants.push(restaurant);
      this.updateLocalStorage();
    }
  }

  removeFromWishlist(restaurant: Restaurant): void {
    this.wishlistedRestaurants = this.wishlistedRestaurants.filter(
      (r) => r.id !== restaurant.id
    );
    this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem(
        'wishlistedRestaurants',
        JSON.stringify(this.wishlistedRestaurants)
      );
    }
  }
}
