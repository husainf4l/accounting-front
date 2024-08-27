import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],

})
export class SignUpComponent {
  signUpForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        taxId: ['', Validators.required],
      }),
      role: ['', Validators.required],
      accessLevel: ['', Validators.required],
      permissions: ['{}', Validators.required]  // Default to empty JSON
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe(
        response => {
          this.router.navigate(['login']);
        },
        error => {
          this.errorMessage = error.error.message || 'An error occurred during sign-up';
        }
      );
    }
  }
}
