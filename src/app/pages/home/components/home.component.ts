import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header (openSignInModal)="openModal()"></app-header>
    <div class="homeContainer">
      <app-home-content></app-home-content>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['../styles/home.style.scss'],
})
export class HomeComponent implements OnInit {
  @Output() openSignInModal: EventEmitter<void> = new EventEmitter();
  isOpenSignInModal = false;

  ngOnInit(): void {}

  openModal() {
    this.isOpenSignInModal = true;
    this.openSignInModal.emit();
  }

  closeModal() {
    this.isOpenSignInModal = false;
  }
}
