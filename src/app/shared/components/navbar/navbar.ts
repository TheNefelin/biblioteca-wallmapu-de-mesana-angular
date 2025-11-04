import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  authService = inject(AuthService);

  getInitials(): string {
    const user = this.authService.currentUser();
    if (!user) return '';
    
    const names = user.nombre.split(' ');
    return names.map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  logout() {
    this.authService.logout();
  }

  goToProfile() {
    console.log('Ir a perfil');
  }
}
