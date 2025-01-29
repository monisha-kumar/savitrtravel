import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private router: Router) {}
  username: string = 'escorting@gmail.com';
  password: string = 'Escort@9663407879';

  // Hardcoded credentials
  correctUsername: string = 'escorting@gmail.com';
  correctPassword: string = 'Escort@9663407879';

  login() {
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      // Navigate to home page upon successful login
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}
