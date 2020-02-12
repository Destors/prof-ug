import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ContactsPageComponent } from "./contacts-page.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [ContactsPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: "",
        component: ContactsPageComponent
      }
    ])
  ]
})
export class ContactsPageModule {}
