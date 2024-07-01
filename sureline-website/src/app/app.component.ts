import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { SliderNavigationComponent } from './slider-navigation/slider-navigation.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderNavigationComponent,
    SliderNavigationComponent,
    FooterNavigationComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    TestimonialsSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sureline Website | TurnKey Solutions';
}
