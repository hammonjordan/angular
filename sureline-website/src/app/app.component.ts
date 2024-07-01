import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavigationComponent, SliderNavigationComponent, FooterNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sureline Website | TurnKey Solutions';
}
