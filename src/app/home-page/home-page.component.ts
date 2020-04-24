import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  title =
    "Профессионал Юг - кондиционеры в Николаеве, продажа, установка, обслуживание";

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          // tslint:disable-next-line:max-line-length
          "Купить кондиционер Николаев, Установить кондиционер в Николаеве, Монтаж кондиционера Николаев, Монтаж кондиционера в николаеве, Установка кондиционеров, Чистка кондицинера, Профилактика кондиционеро.",
      },
      {
        name: "description",
        content:
          // tslint:disable-next-line:max-line-length
          "Профессионал Юг город Николаев, выполняем такие виды работ как, Установить кондиционер, Чистка кондиционера, Монтаж кондиционера, Профилактика кондиционера, Купить кондиционер в Николаеве. Установить кондиционер в Николаеве у нас занимает меньше чем 2 часа времени под ключ. Занимаемся установкой кондиционеров в Николаеве более 15 лет. Купить кондиционер в Николаеве, теперь можно в один звонок. Наши консультанты помогут Вам с выбором. При покупке кондиционера у нас, вы получаете полностью бесплатную доставку в подарок.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Профессионал Юг" },
      { property: "og:title", content: "Кондиционеры в Николаеве" },
      {
        property: "og:description",
        content:
          "Установка, продажа и профилактика кондиционеров в городе Николаев",
      },
      { property: "og:url", content: "https://prof-ug.com" },
      { property: "og:locale", content: "ru_RU" },
      {
        property: "og:image",
        content: "https://prof-ug.web.app/assets/img/og_home.jpg",
      },
      { property: "og:image:width", content: "968" },
      { property: "og:image:height", content: "751" },
    ]);
  }
}
