import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { WishlistedRestaurantsComponent } from './components/wishlisted-restaurants/wishlisted-restaurants.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrdersComponent } from './admin-dashboard/orders/orders.component';
import { AddRestaurantComponent } from './admin-dashboard/add-restaurant-dish/add-restaurant-dish.component';
import { AssignDeliveryAgentsComponent } from './admin-dashboard/assign-delivery-agent/assign-delivery-agent.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CustomerFeedbackComponent } from './admin-dashboard/customer-feedbacks/customer-feedbacks.component';
import { AddMenuComponent } from './admin-dashboard/add-menu/add-menu.component';


export const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', redirectTo: '' },
  {
      path: 'admin-login',
      component: AdminLoginComponent
  },
  {
      path: 'wishlist',
      component: WishlistedRestaurantsComponent
  },
  {
      path: 'menu',
      component: MenuComponent
  },
  {
      path: 'cart',
      component: CartComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: OrdersComponent },
      { path: 'add-restaurants-dishes', component: AddRestaurantComponent },
      { path: 'delivery-agents', component: AssignDeliveryAgentsComponent },
      { path: 'customer-feedbacks', component: CustomerFeedbackComponent},
      { path: 'add-menu', component: AddMenuComponent}
    ],
  },
  {
    path: 'orders-history',
    component: OrderHistoryComponent
  },
  {
    path: 'feedbacks',
    component: FeedbackComponent
  }


];
