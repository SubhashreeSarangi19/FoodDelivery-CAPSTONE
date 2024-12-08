import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit{
  orders: Order[] = [];
  loading = true;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderHistory().subscribe({
      next: (data: Order[]) => {
        this.orders = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching order history', error);
        this.loading = false;
      }
    });
  }
}
