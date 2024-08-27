import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css'],
  imports: [CommonModule, FormsModule],
})
export class LoginPopupComponent {
  @Input() isLoginPopupOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef  // Inject ChangeDetectorRef
  ) { }

  closeLoginPopup() {
    this.close.emit();
    this.errorMessage = '';  // Reset the error message when the popup is closed
  }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        this.closeLoginPopup();
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.errorMessage = 'Invalid credentials, please try again.';
        this.cdr.detectChanges();  // Manually trigger change detection to update the view immediately
      }
    );
  }
}
