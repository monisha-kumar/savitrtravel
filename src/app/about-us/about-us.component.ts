import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  images = [
    'images/hampi.jpg',
    'images/munnar.jpg',
    'images/pondicherry.jpg'
  ];
  index = 0;

  constructor() {
    setInterval(() => this.showNextImage(), 3000);
  }

  showNextImage() {
    this.index = (this.index + 1) % this.images.length;
  }
}
