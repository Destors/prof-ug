import { Component } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent {
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = false;

  slidesChangeMessage = "";

  slides = [
    { image: "../assets/img/slider/wind1.jpg" },
    { image: "../assets/img/slider/install.jpg" },
    { image: "../assets/img/slider/wind2.jpg" },
    { image: "../assets/img/slider/buy (2).jpg" },
    { image: "../assets/img/slider/freon.jpeg" },
    { image: "../assets/img/slider/re-instal.jpg" },
    { image: "../assets/img/slider/repair.jpg" },
    { image: "../assets/img/slider/bac.jpg" },
    { image: "../assets/img/slider/bg2.jpg" },
    { image: "../assets/img/slider/wind3.jpg" },
    { image: "../assets/img/slider/hvac.jpg" },
    { image: "../assets/img/slider/bg-service.jpg" }
  ];

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}
