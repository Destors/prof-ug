import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsPageComponent } from "./products-page.component";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProductsPageComponent,
      },
    ]),
  ],
})
export class ProductsPageModule {}
