import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-service-page",
  templateUrl: "./service-page.component.html",
  styleUrls: ["./service-page.component.scss"]
})
export class ServicePageComponent {
  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
    });
  }

  openDialogBuyCond() {
    const dialogRef = this.dialog.open(CondBuyDialog);
  }

  openDialogInstallCond() {
    const dialogRef = this.dialog.open(CondInstallDialog);
  }
  openDialogCleanCond() {
    const dialogRef = this.dialog.open(CondCleanDialog);
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "CondCleanDialog",
  templateUrl: "./dialog/cond-clean-dialog.html"
})
// tslint:disable-next-line:component-class-suffix
export class CondCleanDialog {}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "CondBuyDialog",
  templateUrl: "./dialog/cond-buy-dialog.html"
})
// tslint:disable-next-line:component-class-suffix
export class CondBuyDialog {}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "CondInstallDialog",
  templateUrl: "./dialog/cond-install-dialog.html"
})
// tslint:disable-next-line:component-class-suffix
export class CondInstallDialog {}
