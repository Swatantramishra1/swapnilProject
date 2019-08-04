import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './sign-in-component.html',
  styleUrls: ['../styles/sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
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
