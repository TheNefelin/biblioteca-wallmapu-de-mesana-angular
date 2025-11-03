import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero";
import { SomeBooksComponent } from './components/some-books/some-books';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SomeBooksComponent,
],
  templateUrl: './home.html',
})
export class HomeComponent {

}
