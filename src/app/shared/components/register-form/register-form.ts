import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [
    FormsModule,
  ],
  templateUrl: './register-form.html',
})
export class RegisterFormComponent {
  private authService = inject(AuthService);

  rut = '';
  nombre = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = signal('');
  loading = signal(false);

  onRegister() {
    // Validaciones
    if (!this.rut || !this.nombre || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage.set('Por favor completa todos los campos');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage.set('Las contraseñas no coinciden');
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage.set('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.errorMessage.set('Email inválido');
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    this.authService.register(this.rut, this.nombre, this.password, this.email).subscribe({
      next: (response) => {
        this.loading.set(false);
        if (response.success) {
          this.rut = '';
          this.nombre = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
          // Cerrar modal
          (document.getElementById('my_modal_2') as HTMLDialogElement)?.close();
        } else {
          this.errorMessage.set(response.message);
        }
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set('Error al registrarse');
      }
    });
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
