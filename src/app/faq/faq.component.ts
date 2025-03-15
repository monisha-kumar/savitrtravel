import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
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
