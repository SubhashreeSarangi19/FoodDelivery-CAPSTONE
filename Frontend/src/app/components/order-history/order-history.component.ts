import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order, OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.scss'
})
export class OrderHistoryComponent implements OnInit{
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
