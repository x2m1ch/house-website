export interface Card {
  src: string;
  creator: string;
  name: string;
  feature: string;
  price: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const France: Card[] = [
  {
    src: `${baseUrl}assets/sections/main/catalog/france/column-1-1.jpg`,
    creator: "Марсель Руссо",
    name: "Охота Амура",
    feature: "Холст, масло (50х80)",
    price: "14 500 руб",
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/france/column-1-2.jpg`,
    creator: "Анри Селин",
    name: "Дама с собачкой",
    feature: "Акрил, бумага (50х80)",
    price: "16 500 руб",
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/france/column-1-3.jpg`,
    creator: "Франсуа Дюпон",
    name: "Процедура",
    feature: "Цветная литография (40х60)",
    price: "20 000 руб",
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/france/column-2-1.jpg`,
    creator: "Луи Детуш",
    name: "Роза",
    feature: "Бумага, акрил (50х80)",
    price: "12 000 руб",
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/france/column-2-2.jpg`,
    creator: "Франсуа Дюпон",
    name: "Птичья трапеза",
    feature: "Цветная литография (40х60)",
    price: "22 500 руб",
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/france/column-2-3.jpg`,
    creator: "Пьер Моранж",
    name: "Пейзаж с рыбой",
    feature: "Цветная литография (40х60)",
    price: "20 000 руб",
  },
];

export const Germany: Card[] = [
  {
    src: `${baseUrl}assets/sections/main/catalog/germany/column-1-1.jpg`,
    creator: "Курт Вернер",
    name: "Над городом",
    feature: "Цветная литография (40х60)",
    price: "16 000 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/germany/column-1-2.jpg`,
    creator: "Макс Рихтер",
    name: "Птенцы",
    feature: "Холст, масло (50х80)",
    price: "14 500 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/germany/column-1-3.jpg`,
    creator: "Мартин Майер",
    name: "Среди листьев",
    feature: "Цветная литография (40х60)",
    price: "20 000 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/germany/column-2-1.jpg`,
    creator: "Герман Беккер",
    name: "Яркая птица",
    feature: "Цветная литография (40х60)",
    price: "13 000 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/germany/column-2-2.jpg`,
    creator: "Вульф Бауэр",
    name: "Дятлы",
    feature: "Бумага, акрил (50х80)",
    price: "20 000 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/germany/column-2-3.jpg`,
    creator: "Вальтер Хартманн",
    name: "Большие воды",
    feature: "Бумага, акрил (50х80)",
    price: "23 000 руб"
  }
]

export const England: Card[] = [
  {
    src: `${baseUrl}assets/sections/main/catalog/england/column-1-1.jpg`,
        creator: "Пол Смит",
        name: "Дикий зверь",
        feature: "Акварель, бумага (50х80)",
        price:"19 500 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/england/column-1-2.jpg`,
        creator: "Джон Уайт",
        name: "Скалистый берег",
        feature: "Цветная литография (40х60)",
        price: "17 500 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/england/column-1-3.jpg`,
        creator: "Джим Уотсон",
        name: "Река и горы",
        feature: "Акварель, бумага (50х80)",
        price: "20 500 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/england/column-2-1.jpg`,
        creator:"Юджин Зиллион",
        name: "Белый попугай",
        feature: "Цветная литография (40х60)",
        price: "15 500 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/england/column-2-2.jpg`,
        creator: "Эрик Гиллман",
        name: "Ночная рыба",
        feature: "Бумага, акрил (50х80)",
        price: "12 500 руб"
  },
  {
    src: `${baseUrl}assets/sections/main/catalog/england/column-2-3.jpg`,
        creator:"Альфред Барр",
        name:"Рыжий кот",
        feature: "Цветная литография (40х60)",
        price: "21 000 руб"
  },
]
