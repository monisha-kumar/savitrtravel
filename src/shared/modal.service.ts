import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private message: string = '';

  setMessage(message: string): void {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }
}
