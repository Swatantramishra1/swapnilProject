import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in-component.html',
  styleUrls: ['../../styles/sign-in.style.scss'],
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
