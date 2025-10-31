import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from "./components/hero/hero";

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Hero,
    Footer,
],
  templateUrl: './home.html',
})
export class Home {

}
