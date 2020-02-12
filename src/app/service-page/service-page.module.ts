import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ServicePageComponent, CondBuyDialog } from "./service-page.component";
import { MaterialModule } from "../shared/material.module";

@NgModule({
  declarations: [ServicePageComponent, CondBuyDialog],
  entryComponents: [CondBuyDialog],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: "",
        component: ServicePageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ServicePageModule {}
