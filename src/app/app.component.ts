import { Component, OnInit } from "@angular/core";
import { ScrollTopService } from "./services/scrolltop.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "prof-ug";
  isCollapsed = true;

  constructor(private scrollTopService: ScrollTopService) {}

  ngOnInit() {
    this.scrollTopService.setScrollTop();
  }
}
