import {Component, ViewChild} from '@angular/core';
import {ModalService} from '../../shared/modal.service';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    ModalComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @ViewChild(ModalComponent) modal!: ModalComponent;
  testimonials: Array<{ username: string; comment: string }> = [
    // Static testimonials for initial display
    { username: 'Aditi', comment: 'Our trip to Goa was flawless! Highly recommended!' },
    { username: 'Rajesh', comment: 'Thank you for making our family vacation so memorable!' },
  ];
  testimonialForm = {
    username: '',
    comment: '',
  };
  constructor(private modalService: ModalService) {}

  showContactInfo(): void {
    const message = "Please contact us at:\nEmail: enquiry@savitrtravels.com\nPhone: +91 9591929117";
    this.modalService.setMessage(message);
    if (this.modal) {
      this.modal.show();
    } else {
      console.error('Modal component instance not available.');
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
