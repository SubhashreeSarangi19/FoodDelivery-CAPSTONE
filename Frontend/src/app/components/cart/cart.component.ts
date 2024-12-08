import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart/cart-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    // Subscribe to cart items
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
    });
  }

  increaseQuantity(itemId: number): void {
    this.cartService.increaseQuantity(itemId);
  }

  decreaseQuantity(itemId: number): void {
    this.cartService.decreaseQuantity(itemId);
  }

  onCheckout(): void {
    const token = localStorage.getItem('authToken'); // Replace with actual token retrieval logic

    this.http.post('http://localhost:8080/api/user/orders/checkout', {}, {
      headers: { Authorization: `Bearer ${token}` },
    }).subscribe(
      (response: any) => {
        console.log('Checkout response:', response);

        // Assuming API response contains the updated order details
        this.cartItems = response.orders || [];
        this.calculateTotal();
      },
      (error) => {
        console.error('Checkout failed:', error);
      }
    );
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.amount * item.quantity, 0);
  }
}
