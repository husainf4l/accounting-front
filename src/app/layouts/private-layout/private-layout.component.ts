import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.css'
})
export class PrivateLayoutComponent {
  isSidebarOpen = false;
  isEcommerceOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleEcommerceDropdown() {
    this.isEcommerceOpen = !this.isEcommerceOpen;
  }


  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }





}
