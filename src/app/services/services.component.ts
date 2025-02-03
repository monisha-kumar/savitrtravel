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
    const message = "Please contact us at:\nEmail: savitrtravels@gmail.com\nPhone: +91 9591929117";
    this.modalService.setMessage(message);
    if (this.modal) {
      this.modal.show();
    } else {
      console.error('Modal component instance not available.');
    }
  }
}
