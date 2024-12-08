import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-feedbacks.component.html',
  styleUrls: ['./customer-feedbacks.component.css'],
})
export class CustomerFeedbackComponent implements OnInit {
  feedbacks: Array<any> = []; // Stores the feedback data
  apiUrl: string = 'http://localhost:8080/api/feedbacks'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchFeedbacks();
  }

  fetchFeedbacks(): void {
    this.http.get<Array<any>>(this.apiUrl).subscribe(
      (data) => {
        this.feedbacks = data;
      },
      (error) => {
        console.error('Error fetching feedbacks:', error);
      }
    );
  }
}
