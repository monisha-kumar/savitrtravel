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
    const message = "Please contact us at:\nEmail: info@example.com\nPhone: +91-1234567890";
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
}
