import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  SimpleChanges,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-nav-bar-content",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["../../styles/home.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit, OnChanges {
  @Input() navbar: any;
  constructor() {}

  navBar = [];

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    const change = changes["navbar"];
    debugger;
    if (change) {
      if (change.currentValue) {
        this.navBar = change.currentValue;
      }
    }
  }
}
