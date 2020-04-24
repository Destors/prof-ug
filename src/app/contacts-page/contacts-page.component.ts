import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"],
})
export class ContactsPageComponent implements OnInit {
  title = "Контакты Профессионал Юг";

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({name: "keywords", content: "Контакты"});
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({name: "description", content: "Контакты компании Профессионал Юг"});
  }
}

