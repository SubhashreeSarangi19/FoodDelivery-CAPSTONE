import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { CuisinesComponent } from './components/cuisines/cuisines.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HeaderComponent,CommonModule,CuisinesComponent,FooterComponent,RestaurantsComponent],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Frontend';
  showCuisinesAndRestaurants = false;
  hideHeader = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.updateVisibility(this.router.url);
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd) // Narrow the event type
    ).subscribe((event: NavigationEnd) => {
      this.updateVisibility(event.url);
    });
  }
  private updateVisibility(url: string) {
    this.showCuisinesAndRestaurants = url === '/' || url === '/home';
    this.hideHeader = url === '/login' || url === '/register' || url === '/admin-login' || url === '/admin-dashboard' || url === '/admin-dashboard/orders' || url === '/admin-dashboard/add-restaurants-dishes' || url === '/admin-dashboard/delivery-agents' || url === '/admin-dashboard/customer-feedbacks' || url === '/admin-dashboard/add-menu';
  }
}
