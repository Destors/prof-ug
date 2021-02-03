import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
import { Injectable, Inject } from "@angular/core";

@Component({
  selector: "app-service-page",
  templateUrl: "./service-page.component.html",
  styleUrls: ["./service-page.component.scss"],
})
export class ServicePageComponent implements OnInit {
  title = "Услуги Профессионал Юг";

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private dom
  ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

  openDialogBuyCond() {
    const dialogRef = this.dialog.open(CondBuyDialog);
  }

  openDialogBuyCondInstall() {
    const dialogRef = this.dialog.open(CondInstallDialog);
  }
  openDialogCleanCond() {
    const dialogRef = this.dialog.open(CondCleanDialog);
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({
      name: "keywords",
      content:
        // tslint:disable-next-line:max-line-length
        "ремонт кондиционера, чистка кондициоенра, профилактика кондиционера,купить бойлер Николаев, установить бойлер, установка бойлеров, чистка бойлера, купить стиральную машину, ремонт стиральных машин",
    });
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({
      name: "description",
      content:
        // tslint:disable-next-line:max-line-length
        "Установка кондиционеров любой сложности, официальная гарантия на выполненые работы. Чистка и профилактика кондиционеров а также, стиральных машин и бойлеров в городе Николаев",
    });
    const domainName = "https://prof-ug.com/service";
    const link: HTMLLinkElement = this.dom.createElement("link");
    link.setAttribute("rel", "canonical");
    this.dom.head.appendChild(link);
    link.setAttribute("href", domainName);
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "CondCleanDialog",
  templateUrl: "./dialog/cond-clean-dialog.html",
})
// tslint:disable-next-line:component-class-suffix
export class CondCleanDialog {}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "CondBuyDialog",
  templateUrl: "./dialog/cond-buy-dialog.html",
})
// tslint:disable-next-line:component-class-suffix
export class CondBuyDialog {}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "CondInstallDialog",
  templateUrl: "./dialog/cond-install-dialog.html",
})
// tslint:disable-next-line:component-class-suffix
export class CondInstallDialog {}
