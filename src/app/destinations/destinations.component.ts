import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../shared/modal.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent  {
  @ViewChild(ModalComponent) modal!: ModalComponent;
  isVisible = false;
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
  private toggleBodyScroll() {
    if (this.isVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
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
