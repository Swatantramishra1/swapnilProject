import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  SimpleChanges,
  OnChanges,
  Input,
} from '@angular/core';

import { SignInPageAdapter as Adapter } from '../service/signIn.adapter';
import { User } from 'src/app/type/login.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign-in-component.html',
  styleUrls: ['../styles/sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnChanges {
  constructor(private adapter: Adapter, private router: Router) {}
  @Output() handleSignIn: EventEmitter<{
    userid;
    password;
  }> = new EventEmitter();
  @Input() error: any;
  @Input() user: User;
  isOpenSignInModal = false;

  @ViewChild('userid', { static: false }) useridEl: ElementRef;
  @ViewChild('password', { static: false }) passwordEl: ElementRef;

  response: any;
  ngOnInit(): void {}

  closeModal() {
    this.isOpenSignInModal = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    let change;
    console.log(changes);
    if (changes.hasOwnProperty('error')) {
      change = changes.error;
    }

    if (change) {
      if (!change.firstChange && change.previousValue !== change.currentValue) {
        if (change.currentValue) {
          this.response = change.currentValue;
          if (this.response) {
            alert('not success');
          } else {
            this.router.navigate(['home']);
          }
        }
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  login() {
    const userid = this.useridEl.nativeElement.value;
    const password = this.passwordEl.nativeElement.value;
    this.handleSignIn.emit({ userid, password });
  }
}
