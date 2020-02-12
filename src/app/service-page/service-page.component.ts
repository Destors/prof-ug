import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-service-page",
  templateUrl: "./service-page.component.html",
  styleUrls: ["./service-page.component.scss"]
})
export class ServicePageComponent {
  constructor(public dialog: MatDialog) {}

  openDialogBuyCond() {
    const dialogRef = this.dialog.open(CondBuyDialog);
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "CondBuyDialog",
  templateUrl: "./dialog/cond-buy-dialog.html"
})
// tslint:disable-next-line:component-class-suffix
export class CondBuyDialog {}
