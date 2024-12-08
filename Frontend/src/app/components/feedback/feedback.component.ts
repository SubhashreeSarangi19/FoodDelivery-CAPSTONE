import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    this.feedbackForm = this.fb.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      rating: [5, [Validators.required, Validators.min(0), Validators.max(5)]],
    });
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
      this.feedbackService.postFeedback(this.feedbackForm.value).subscribe({
        next: (response) => {
          this.successMessage = 'Thank you for your feedback!';
          this.errorMessage = '';
          this.feedbackForm.reset({ rating: 5 }); // Reset the form and keep default rating
        },
        error: (error) => {
          this.errorMessage = 'Failed to submit feedback. Please try again.';
          this.successMessage = '';
        },
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
    }
  }
}
