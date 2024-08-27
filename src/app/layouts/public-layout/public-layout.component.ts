import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginPopupComponent } from "../../shared/login-popup/login-popup.component";

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoginPopupComponent, RouterModule],
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent {

  isNavbarOpen = false;
  isLoginPopupOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  openLoginPopup() {
    this.isLoginPopupOpen = true;
  }

  closeLoginPopup() {
    this.isLoginPopupOpen = false;
  }
}
