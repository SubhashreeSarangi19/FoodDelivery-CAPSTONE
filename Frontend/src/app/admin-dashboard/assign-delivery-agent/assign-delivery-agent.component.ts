import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignDeliveryAgents',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './assign-delivery-agent.component.html',
  styleUrls: ['./assign-delivery-agent.component.css'],
})
export class AssignDeliveryAgentsComponent{
  deliveryAgents: any[] = [];
  orders: any[] = [];
  assignForm: FormGroup;
  submitted = false;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.assignForm = this.fb.group({
      orderId: ['', [Validators.required]],
      deliveryAgentId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadDeliveryAgents();
    this.loadOrders();
  }

  // Load delivery agents from the backend
  loadDeliveryAgents(): void {
    this.http.get<any[]>('http://localhost:8080/api/delivery').subscribe(
      (data) => {
        this.deliveryAgents = data;
      },
      (error) => {
        console.error('Error loading delivery agents:', error);
        alert('Failed to load delivery agents.');
      }
    );
  }

  loadOrders(): void {
    this.http.get<any[]>('http://localhost:8080/api/user/orders').subscribe(
      (data) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error loading orders:', error);
        alert('Failed to load orders.');
      }
    );
  }

  // Assign delivery agent to an order
  assignDeliveryAgent(): void {
    this.submitted = true;

    if (this.assignForm.valid) {
      const { orderId, deliveryAgentId } = this.assignForm.value;
      this.http.put(`http://localhost:8080/api/delivery/assign/{orderId}`, { deliveryAgentId }).subscribe(
        (response) => {
          alert('Delivery agent assigned successfully!');
          this.assignForm.reset();
          this.submitted = false;
        },
        (error) => {
          console.error('Error assigning delivery agent:', error);
          alert('Failed to assign delivery agent.');
        }
      );
    }
  }
}
