import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adminEmail = '';
  adminPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  onAdminLogin() {
    this.authService.adminLogin(this.adminEmail, this.adminPassword).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        alert('Login successful');
        this.router.navigate(['/admin-dashboard']);
      },
      error: () => alert('Invalid credentials'),
    });
  }
}
