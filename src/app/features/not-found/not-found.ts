import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
})
export class NotFound {
  private router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}
