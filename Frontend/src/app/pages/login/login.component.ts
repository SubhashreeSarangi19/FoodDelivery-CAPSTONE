import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        alert('Login successful');
        this.router.navigate(['/home']);
      },
      error: () => alert('Invalid credentials'),
    });
  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  navigateToAdminLogin() {
    this.router.navigate(['/admin-login']);
  }
}
