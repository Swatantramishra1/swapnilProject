import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";

@Component({
  selector: "app-home-content",
  templateUrl: "./content.component.html",
  styleUrls: ["../../styles/home.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContentComponent implements OnInit {
  @Input() navbar: any;
  constructor() {}

  ngOnInit(): void {}
}
