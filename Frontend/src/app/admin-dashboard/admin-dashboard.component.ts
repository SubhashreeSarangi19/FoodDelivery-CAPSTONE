import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant-dish/add-restaurant-dish.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,NavbarComponent,OrdersComponent, RouterOutlet,AddRestaurantComponent,FormsModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  showNavbar = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateVisibility(event.urlAfterRedirects);
      }
    });
  }

  private updateVisibility(url: string) {
    // Define routes where the navbar should be displayed
    const navbarRoutes = ['/orders', '/add-restaurants-dishes', '/delivery-agents'];
    this.showNavbar = navbarRoutes.includes(url);
  }
}
