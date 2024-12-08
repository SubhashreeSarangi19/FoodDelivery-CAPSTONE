import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
// export class RegisterComponent {
//   email = '';
//   password = '';
//   username = '';

//   constructor(private authService: AuthService, private router: Router) {}
//   onRegister() {
//     this.authService
//       .register(this.email, this.password, this.username)
//       .subscribe({
//         next: () => {
//           alert('Registration successful! Please login.');
//           this.router.navigate(['/login']);
//         },
//         error: () => alert('Registration failed.'),
//       });
//   }
// }
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const user = { username: this.username, email: this.email, password: this.password };

    this.http.post('http://localhost:8080/api/auth/register', user).subscribe(
      (response: any) => {
        alert("User Registered");
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        alert('Error during registration!');
        alert('If already registered please try login!');
      }
    );
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  navigateToAdminLogin() {
    this.router.navigate(['/admin-login']);
  }
}