import { Component, OnInit } from "@angular/core";
import { ScrollTopService } from "./services/scrolltop.service";
import { CanonicalService } from "./shared/canonical.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "prof-ug";
  isCollapsed = true;

  constructor(
    private scrollTopService: ScrollTopService,
    private canonicalService: CanonicalService
  ) {}

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
