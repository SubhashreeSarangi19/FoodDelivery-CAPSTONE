import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartServiceService } from '../cart/cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private menuService: MenuService, private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.fetchMenuItems();
  }

  fetchMenuItems(): void {
    this.menuService.getMenuItems().subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Error fetching menu items:', err);
        alert('Failed to load menu. Please try again later.');
      }
    });
  }

  addToCart(item: any): void {
    const cartItem = {
      id: item.id,
      dishName: item.name,
      amount: item.price,
      quantity: 1,
      description: item.description,
      image: item.image
    };
    this.cartService.addItem(cartItem);
  }
}
