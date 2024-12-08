import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addRestaurants',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add-restaurant-dish.component.html',
  styleUrls: ['./add-restaurant-dish.component.css'],
})
export class AddRestaurantComponent{

  restaurantForm: FormGroup;
  menuItemForm: FormGroup;
  restaurantSubmitted = false;
  menuSubmitted = false;
  restaurants: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize restaurant form
    this.restaurantForm = this.fb.group({
      name: ['', [Validators.required]],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      isFavorite: [false],
      imageUrl: ['', [Validators.required]]
    });
    this.loadRestaurants();

    // Initialize menu item form
    this.menuItemForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      spicy: [false],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      reviews: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      customizable: [false]
    });
  }

  // Submit restaurant form
  addRestaurant(): void {
    this.restaurantSubmitted = true;

    if (this.restaurantForm.valid) {
      this.http.post('http://localhost:8080/api/restaurants/add', this.restaurantForm.value).subscribe(
        (response) => {
          console.log('Restaurant added successfully:', response);
          alert('Restaurant added successfully!');
          this.restaurantForm.reset();
          this.restaurantSubmitted = false;
        },
        (error) => {
          console.error('Error adding restaurant:', error);
          alert('Failed to add restaurant.');
        }
      );
    }
  }

  loadRestaurants(): void {
    this.http.get<any[]>('http://localhost:8080/api/restaurants').subscribe(
      (response) => {
        this.restaurants = response;
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

  deleteRestaurant(id: string): void {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.http
        .delete(`http://localhost:8080/api/restaurants/${id}`, { responseType: 'text' }) // Specify responseType as 'text'
        .subscribe(
          (response) => {
            console.log('Response:', response); // Logs plain text response
            alert(response); // Show the response message
            this.loadRestaurants(); // Refresh the restaurant list
          },
          (error) => {
            console.error('Error deleting restaurant:', error);
            alert('Failed to delete restaurant.');
          }
        );
    }
  }
  

  // Submit menu item form
  addMenuItem(): void {
    this.menuSubmitted = true;

    if (this.menuItemForm.valid) {
      this.http.post('http://localhost:8080/api/menu/add', this.menuItemForm.value).subscribe(
        (response) => {
          console.log('Menu item added successfully:', response);
          alert('Menu item added successfully!');
          this.menuItemForm.reset();
          this.menuSubmitted = false;
        },
        (error) => {
          console.error('Error adding menu item:', error);
          alert('Failed to add menu item.');
        }
      );
    }
  }
  

}
