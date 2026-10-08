import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { mountReactLogin } from '@island-stars/react-login';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.component.scss',
  templateUrl: './login.component.html',
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactLoginContainer')
  container!: ElementRef<HTMLDivElement>;

  private router = inject(Router);
  private ngZone = inject(NgZone);

  private unmountReact?: () => void;

  ngAfterViewInit(): void {
    console.log('Angular LoginComponent initialized');

    this.unmountReact = mountReactLogin(this.container.nativeElement, {
      onSuccess: () => {
        this.ngZone.run(() => {
          void this.router.navigate(['/home']);
        });
      },
    });

    console.log('React login mount requested');
  }

  ngOnDestroy(): void {
    this.unmountReact?.();
  }
}
