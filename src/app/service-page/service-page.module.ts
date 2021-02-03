import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  ServicePageComponent,
  CondBuyDialog,
  CondInstallDialog,
  CondCleanDialog,
} from "./service-page.component";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { CondInstallPageComponent } from "./pages/cond-install-page/cond-install-page.component";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [
    ServicePageComponent,
    CondBuyDialog,
    CondInstallDialog,
    CondCleanDialog,
    CondInstallPageComponent,
  ],
  entryComponents: [CondBuyDialog, CondInstallDialog, CondCleanDialog],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: "",
        component: ServicePageComponent,
      },
      {
        path: "cond-install",
        component: CondInstallPageComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ServicePageModule {}
