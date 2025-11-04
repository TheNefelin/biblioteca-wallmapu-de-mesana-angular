import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule,
  ],
  templateUrl: './login-form.html',
})
export class LoginFormComponent {
  private authService = inject(AuthService);

  rut = '';
  password = '';
  errorMessage = signal('');
  loading = signal(false);

  onLogin() {
    if (!this.rut || !this.password) {
      this.errorMessage.set('Por favor completa todos los campos');
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    this.authService.login(this.rut, this.password).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.success) {
          this.rut = '';
          this.password = '';
          // Cerrar modal
          (document.getElementById('my_modal_1') as HTMLDialogElement)?.close();
        } else {
          this.errorMessage.set(response.message);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set('Error al iniciar sesión');
      }
    });
  }  
}
