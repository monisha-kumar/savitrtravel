import {Component, ViewChild} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {ModalComponent} from '../modal/modal.component';
import {ModalService} from '../../shared/modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    ModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild(ModalComponent) modal!: ModalComponent;
  showCallDropdown = false;
  showWhatsAppDropdown = false;
  images = [
    'images/belur.jpg',
    'images/hampi.jpg',
    'images/munnar.jpg',
    'images/mysore_palace.jpg'
  ];
  index = 0;
  heroBackground = `url('${this.images[0]}')`;

  // ✅ Add the destinations array
  destinations = [
    { name: 'Mysore, Karnataka', image: 'images/mysore_palace.jpg', description: 'The Crown Jewel of Karnataka\'s Royal Heritage.' },
    { name: 'Coorg, Karnataka', image: 'images/coorg.jpeg', description: 'Famous for coffee plantations, misty hills & waterfalls.' },
    { name: 'Ooty, Tamil Nadu', image: 'images/ooty.jpeg', description: 'The "Queen of Hill Stations" with tea gardens & railway.' },
    { name: 'Pondicherry', image: 'images/pondicherry.jpg', description: 'French colonial charm & peaceful beaches.' },
    { name: 'Munnar, Kerala', image: 'images/munnar.jpg', description: 'Lush tea gardens & breathtaking hill views.' },
    { name: 'Hampi, Karnataka', image: 'images/hampi.jpg', description: 'UNESCO site with ancient temples & stunning landscapes.' },
    { name: 'Halebidu, Karnataka', image: 'images/halebidu1.jpg', description: 'UNESCO heritage site known for its ancient temples, exquisite Hoysala architecture, and breathtaking landscapes.' },
    { name: 'St Mary’s Island near Malpe beach, Udupi, Karnataka', image: 'images/st-marys.jpg', description: 'Famous for its unique basalt rock formations, pristine beaches, and stunning natural beauty.' }
  ];

  constructor(private modalService: ModalService) {
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
  showContactInfo(): void {
    const message = "Please contact us at:\nEmail: enquiry@savitrtravels.com\nPhone: +91 9591929117";
    this.modalService.setMessage(message);
    if (this.modal) {
      this.modal.show();
    } else {
      console.error('Modal component instance not available.');
    }
  }
  chatOnWhatsApp(phoneNumber: string) {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello%2C%20I%20am%20interested%20in%20Savitr%20Travels!`, '_blank');
  }
}
