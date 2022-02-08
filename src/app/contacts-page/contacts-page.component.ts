import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"],
})
export class ContactsPageComponent implements OnInit {
  title = "Контакты Профессионал Юг";

  public loadScript() {
    console.log("preparing to load...");
    const node = document.createElement("script");
    node.text =
      "gtag('event', 'conversion', {'send_to': 'AW-988447515/DTLlCJCP1PACEJuGqtcD'});";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit() {
    this.loadScript();
    this.titleService.setTitle(this.title);
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({ name: "keywords", content: "Контакты" });
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({
      name: "description",
      content: "Контакты компании Профессионал Юг",
    });
  }
}
