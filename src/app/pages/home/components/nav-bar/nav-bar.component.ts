import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-nav-bar-content",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["../../styles/home.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
