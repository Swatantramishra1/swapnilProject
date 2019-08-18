import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <div class="headerContainer flex">
      <img
        src="http://pluspng.com/img-png/sony-logo-eps-png-sony-sony-hd-png-6000.png"
        alt="sony"
      />
      <a (click)="goToSingInPage()">Sign in</a>
    </div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() openSignInModal: EventEmitter<void> = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToSingInPage() {
    this.openSignInModal.emit();
  }
}
