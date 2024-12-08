import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]); // Store cart items
  cartItems$ = this.cartItemsSubject.asObservable(); // Expose as Observable

  private cartCountSubject = new BehaviorSubject<number>(0); // Store cart count
  cartCount$ = this.cartCountSubject.asObservable();

  private updateCartCount(): void {
    this.cartCountSubject.next(
      this.cartItemsSubject.getValue().reduce((count, item) => count + item.quantity, 0)
    );
  }

  constructor() {}

  // Add item to cart
  addItem(item: any): void {
    const currentItems = this.cartItemsSubject.getValue();
    const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity if item exists
    } else {
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItemsSubject.next(currentItems); // Update the observable
    this.updateCartCount(); // Update the cart count
  }

  // Get all cart items
  getCartItems(): Observable<any[]> {
    return this.cartItems$;
  }

  // Increase item quantity
  increaseQuantity(itemId: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const item = currentItems.find((cartItem) => cartItem.id === itemId);
    if (item) {
      item.quantity += 1;
      this.cartItemsSubject.next(currentItems); // Update observable
      this.updateCartCount(); // Update the cart count
    }
  }

  // Decrease item quantity
  decreaseQuantity(itemId: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const item = currentItems.find((cartItem) => cartItem.id === itemId);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        this.removeItem(itemId); // Remove item if quantity is 0
      } else {
        this.cartItemsSubject.next(currentItems);
        this.updateCartCount(); // Update the cart count
      }
    }
  }

  // Remove item from cart
  removeItem(itemId: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter((cartItem) => cartItem.id !== itemId);
    this.cartItemsSubject.next(updatedItems); // Update observable
    this.updateCartCount(); // Update the cart count
  }

  // Checkout and clear the cart
  checkout(): Observable<void> {
    return new Observable<void>((observer) => {
      setTimeout(() => {
        this.cartItemsSubject.next([]); // Clear cart
        this.updateCartCount(); // Reset the cart count
        observer.next();
        observer.complete();
      }, 1000);
    });
  }

  clearCart(): void {
    this.cartItemsSubject.next([]); // Clear cart items
    this.updateCartCount(); // Reset the cart count
  }
}
