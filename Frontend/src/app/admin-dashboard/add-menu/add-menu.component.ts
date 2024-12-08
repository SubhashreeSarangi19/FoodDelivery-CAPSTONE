import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignDeliveryAgents',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
})
export class AddMenuComponent{
  menuItemForm: FormGroup;
  menuSubmitted = false;

  // To display dishes and handle deletion
  menuItems: any[] = [];
  fetchError = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
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

    this.loadMenuItems(); // Load existing menu items
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
          this.loadMenuItems(); // Refresh the menu items list
        },
        (error) => {
          console.error('Error adding menu item:', error);
          alert('Failed to add menu item.');
        }
      );
    }
  }

  // Fetch menu items from the server
  loadMenuItems(): void {
    this.http.get<any[]>('http://localhost:8080/api/menu').subscribe(
      (data) => {
        this.menuItems = data;
        this.fetchError = '';
      },
      (error) => {
        console.error('Error loading menu items:', error);
        this.fetchError = 'Failed to load menu items.';
      }
    );
  }

  // Delete menu item by ID
  deleteMenuItem(id: string): void {
    if (confirm('Are you sure you want to delete this menu item?')) {
      this.http.delete(`http://localhost:8080/api/menu/${id}`).subscribe(
        () => {
          alert('Menu item deleted successfully!');
          this.loadMenuItems(); // Refresh the menu items list
        },
        (error) => {
          console.error('Error deleting menu item:', error);
          alert('Failed to delete menu item.');
        }
      );
    }
  }

}
