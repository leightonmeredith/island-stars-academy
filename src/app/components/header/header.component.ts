import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';
import { RoutesConstants } from '../../shared/constants/routes.constant';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router);
  private readonly showPlayers = environment.showPlayers;
  private readonly showLogin = environment.showLogin;

  goToHome() {
    this.router.navigate([RoutesConstants.HOME]);
  }

  goToAbout() {
    this.router.navigate([RoutesConstants.ABOUT]);
  }

  goToCoaches() {
    this.router.navigate([RoutesConstants.COACHES]);
  }

  goToPlayers() {
    this.router.navigate([RoutesConstants.PLAYERS]);
  }

  goToPrograms() {
    this.router.navigate([RoutesConstants.PROGRAMS]);
  }

  goToLogin() {
    this.router.navigate([RoutesConstants.LOGIN]);
  }
}
