import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  title = "Профессионал Юг - кондиционеры в Николаеве, продажа, установка, обслуживание";

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          // tslint:disable-next-line:max-line-length
          "Купить кондиционер Николаев, Установить кондиционер в Николаеве, Монтаж кондиционера Николаев, Монтаж кондиционера в николаеве, Установка кондиционеров, Чистка кондицинера, Профилактика кондиционеро."
      },
      {
        name: "description",
        content:
          // tslint:disable-next-line:max-line-length
          "Профессионал Юг город Николаев, выполняем такие виды работ как, Установить кондиционер, Чистка кондиционера, Монтаж кондиционера, Профилактика кондиционера, Купить кондиционер в Николаеве. Установить кондиционер в Николаеве у нас занимает меньше чем 2 часа времени под ключ. Занимаемся установкой кондиционеров в Николаеве более 15 лет. Купить кондиционер в Николаеве, теперь можно в один звонок. Наши консультанты помогут Вам с выбором. При покупке кондиционера у нас, вы получаете полностью бесплатную доставку в подарок."
      },
      { name: "robots", content: "index, follow" }
    ]);
  }
}
