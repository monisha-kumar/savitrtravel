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
  showCallDropdown = false;
  showWhatsAppDropdown = false;
  images = [
    '/images/car1.jpg',
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
  toggleDropdown(type: string) {
    if (type === 'call') {
      this.showCallDropdown = !this.showCallDropdown;
      this.showWhatsAppDropdown = false;
    } else if (type === 'whatsapp') {
      this.showWhatsAppDropdown = !this.showWhatsAppDropdown;
      this.showCallDropdown = false;
    }
  }

  mailUs() {
    window.location.href = 'mailto:enquiry@savitrtravels.com';
  }

  callNow(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
  }

  chatOnWhatsApp(phoneNumber: string) {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello%2C%20I%20am%20interested%20in%20Savitr%20Travels!`, '_blank');
  }
}
