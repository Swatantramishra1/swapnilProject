import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SignInPageAdapter as Adapter } from '../service/signIn.adapter';

@Component({
  selector: 'app-home',
  templateUrl: './sign-in-component.html',
  styleUrls: ['../styles/sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @Output() openSignInModal: EventEmitter<void> = new EventEmitter();
  isOpenSignInModal = false;

  constructor(private adapter: Adapter) {}

  ngOnInit(): void {}

  openModal() {
    this.isOpenSignInModal = true;
    this.openSignInModal.emit();
  }

  closeModal() {
    this.isOpenSignInModal = false;
  }

  login() {
    this.adapter.signIn('swata', 'ssss');
  }
}
