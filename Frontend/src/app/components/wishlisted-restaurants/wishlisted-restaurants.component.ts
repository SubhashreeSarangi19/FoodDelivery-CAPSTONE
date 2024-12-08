import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';

import { RouterLink } from '@angular/router';
import { Restaurant } from '../../services/restaurant.service';

@Component({
  selector: 'app-wishlisted-restaurants',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './wishlisted-restaurants.component.html',
  styleUrl: './wishlisted-restaurants.component.css'
})

export class WishlistedRestaurantsComponent {
  wishlistedRestaurants: Restaurant[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedWishlisted = localStorage.getItem('wishlistedRestaurants');
      if (storedWishlisted) {
        this.wishlistedRestaurants = JSON.parse(storedWishlisted);
      }
    }
  }
  
}
