import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";
import { User } from "src/app/type/login.type";

@Component({
  selector: "app-home",
  template: `
    <app-header></app-header>
    <div class="homeContainer">
      <app-home-content [navbar]="navbar"></app-home-content>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ["../styles/home.style.scss"]
})
export class HomeComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() navbar: any;

  @Output() handleNavBar: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.user);
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes["user"];
    console.log(change);
    debugger;
    if (change) {
      if (change.currentValue) {
        this.handleNavBar.emit(change.currentValue.Global_Id);
      }
    }
  }
}
