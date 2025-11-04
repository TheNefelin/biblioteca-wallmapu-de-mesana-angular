import { Component, inject } from '@angular/core';
import { LoginFormComponent } from '../../../../shared/components/login-form/login-form';
import { RegisterFormComponent } from '../../../../shared/components/register-form/register-form';
import { AuthService } from '../../../../core/services/auth-service';

@Component({
  selector: 'app-hero',
  imports: [
    LoginFormComponent,
    RegisterFormComponent,
  ],
  templateUrl: './hero.html',
})
export class HeroComponent {
  authService = inject(AuthService);
}
