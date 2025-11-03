import { Component } from '@angular/core';
import { LoginFormComponent } from '../../../../shared/components/login-form/login-form';
import { RegisterFormComponent } from '../../../../shared/components/register-form/register-form';

@Component({
  selector: 'app-hero',
  imports: [
    LoginFormComponent,
    RegisterFormComponent,
  ],
  templateUrl: './hero.html',
})
export class HeroComponent {

}
