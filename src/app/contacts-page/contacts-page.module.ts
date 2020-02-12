import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ContactsPageComponent } from "./contacts-page.component";

@NgModule({
  declarations: [ContactsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ContactsPageComponent
      }
    ])
  ]
})
export class ContactsPageModule {}
