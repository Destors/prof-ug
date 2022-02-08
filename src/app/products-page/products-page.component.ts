import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"],
})
export class ProductsPageComponent implements OnInit {
  title = "Купить кондиционер в Николаеве";
  constructor(
    private titleService: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private dom
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({
      name: "keywords",
      content:
        // tslint:disable-next-line:max-line-length
        "Купить кондиционер Николаев, кондиционеры николаев, кондиционеры под ключ, сплит система, заказать кондиционер, кондиционер цена, продажа кондиционеров, кондиционер с установкой николаев, магазин кондиционеров.",
    });
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({
      name: "description",
      content:
        // tslint:disable-next-line:max-line-length
        "Купить кондиционер в Николаеве со склада, официальная гарантия и скидка на установку. Наш магазин кондиционеров, поможет подобрать наиболее подходящую для Вас модель кондиционера, как по мощности так и по бренду. Осуществляем весь спектр услуг по обслуживанию климатической техники. Вы можете заказать Монтаж кондиционера любого уровня сложности в Николаеве, с гарантией на выполненные работы.",
    });
    const domainName = "https://prof-ug.com/products";
    const link: HTMLLinkElement = this.dom.createElement("link");
    link.setAttribute("rel", "canonical");
    this.dom.head.appendChild(link);
    link.setAttribute("href", domainName);
  }
}
