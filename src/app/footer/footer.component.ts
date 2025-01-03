import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesConsants } from '../shared/utils/constants';

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
    this.router.navigate([RoutesConsants.HOME])
  }

  goToAbout() {
    this.router.navigate([RoutesConsants.ABOUT])
  }

  goToCoaches() {
    this.router.navigate([RoutesConsants.COACHES])
  }
}
