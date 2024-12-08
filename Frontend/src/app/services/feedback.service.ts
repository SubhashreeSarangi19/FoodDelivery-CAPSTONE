import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:8080/api/feedbacks/add';

  constructor(private http: HttpClient) {}

  postFeedback(feedback:any):Observable<any>{
    return this.http.post(this.apiUrl, feedback);
  }
}
