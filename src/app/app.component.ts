import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth.service';

/**
 * AppComponent — shell principale dell'applicazione.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isNavigating= false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart)  this.isNavigating = true;
      if (event instanceof NavigationEnd ||
          event instanceof NavigationCancel) this.isNavigating = false;
    });
  }

  currentUser() {
    return this.authService.currentUser();
  }

  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  isAdmin() {
    return this.authService.getCurrentUser()?.role === 'admin';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
