import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesConstants } from '../shared/utils/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private router = inject(Router);

  goToHome() {
    this.router.navigate([RoutesConstants.HOME])
  }

  goToAbout() {
    this.router.navigate([RoutesConstants.ABOUT])
  }

  goToCoaches() {
    this.router.navigate([RoutesConstants.COACHES])
  }

  goToPrograms() {
    this.router.navigate([RoutesConstants.PROGRAMS])
  }
}
