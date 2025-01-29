import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    '/images/hampi.jpg',
    '/images/munnar.jpg',
    '/images/mysore_palace.jpg'
  ];
  index = 0;
  constructor() {
    setInterval(() => this.showNextImage(), 3000);
  }

  showNextImage() {
    this.index = (this.index + 1) % this.images.length;
  }
}
