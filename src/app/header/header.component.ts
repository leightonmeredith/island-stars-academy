import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { RoutesConsants } from '../shared/utils/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private router = inject(Router)

  goToHome() {
    this.router.navigate([RoutesConsants.HOME])
  }

  goToAbout() {
    this.router.navigate([RoutesConsants.ABOUT])
  }

  goToCoaches() {
    this.router.navigate([RoutesConsants.COACHES])
  }
}
