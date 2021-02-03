import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: "Замеры и выбор места установки ",
  },
  {
    position: 2,
    name: "Бурение отверстия под коммуникации",
  },
  {
    position: 3,
    name: "Установка внутреннего блока кондиционера",
  },
  {
    position: 4,
    name: "Установка наружного блока кондиционера",
  },
  {
    position: 5,
    name: "Прокладка трассы между блоками",
  },
  {
    position: 6,
    name: "Вакумация фреоновой магистрали",
  },
  { position: 7, name: "Вывод дренажной магистрали" },
  { position: 8, name: "Прокладка и подключение межблочного кабеля" },
  { position: 9, name: "Подготовка и запуск кондиционера после установки" },
  { position: 10, name: "Тепло-изоляция отверстия в стене (Монтажной пеной)" },
  { position: 11, name: "Уборка строительного мусора" },
  { position: 12, name: "Заполнение гарантийных талонов" },
];

@Component({
  selector: "app-cond-page",
  templateUrl: "./cond-install-page.component.html",
  styleUrls: ["./cond-install-page.component.scss"],
})
export class CondInstallPageComponent implements OnInit {
  title = "Установить кондиционер в Николаеве";
  constructor(private titleService: Title, private meta: Meta) {}
  displayedColumns: string[] = ["position", "name"];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.titleService.setTitle(this.title);
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({
      name: "keywords",
      content:
        // tslint:disable-next-line:max-line-length
        "Установить кондиционер в николаеве, монтаж кондиционера, установка кондиционеров, установка кондиционеров николаев, монтаж кондиционера николаев",
    });
    // tslint:disable-next-line:max-line-length
    this.meta.updateTag({
      name: "description",
      content:
        // tslint:disable-next-line:max-line-length
        "Установка кондиционеров любой сложности в городе Николаев, официальная гарантия на выполненные работы. Наша компания оказывает услуги по высококвалифицированной установке кондиционеров, в квартирах, частных домах и офисах. Осуществляем весь спектр услуг по обслуживанию климатической техники. Вы можете заказать Монтаж кондиционера любого уровня сложности в Николаеве, с гарантией на выполненные работы.",
    });
  }
}
