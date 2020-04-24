import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CollapseModule } from "ngx-bootstrap";
import { MatIconModule } from "@angular/material/icon";
import { ScrollTopService } from "./services/scrolltop.service";

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, HomePageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CollapseModule.forRoot(),
  ],
  providers: [ScrollTopService],
  bootstrap: [AppComponent],
})
export class AppModule {}
