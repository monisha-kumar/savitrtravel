import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {ModalService} from '../../shared/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: `./modal.component.html`,
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  // Modal visibility flag
  isVisible = false;
  message = '';
  constructor(private modalService: ModalService) {}

  // Show the modal with the message
  show(): void {
    this.message = this.modalService.getMessage();
    this.isVisible = true;
  }

  hide(): void {
    this.isVisible = false;
  }
}
