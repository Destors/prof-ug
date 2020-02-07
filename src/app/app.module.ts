import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CollapseModule } from "ngx-bootstrap";
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { HomePageComponent } from "./home-page/home-page.component";
import {
  ServicePageComponent,
  DialogContentExampleDialog
} from "./service-page/service-page.component";
import { ContactsPageComponent } from "./contacts-page/contacts-page.component";
import { MaterialModule } from "./shared/material.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    ServicePageComponent,
    ContactsPageComponent,
    DialogContentExampleDialog
  ],
  entryComponents: [DialogContentExampleDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
