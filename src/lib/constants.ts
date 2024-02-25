import { getCollections } from "./api/requests/getCollections";
import { ICollection } from "./types";

export const CARE_RECOMMENDATIONS = {
  title: "Рекомендации по уходу",
  contentTitle: "",
  contentText:
    // eslint-disable-next-line max-len
    "Стирать изделия вручную или в стиральной машине в режиме «деликатная стирка» универсальными моющими средствами, не содержащими отбеливателей, при температуре до 30 °С. Полоскать в теплой, затем в холодной воде, добавив антистатик. Отжимать легкими движениями без выкручивания — лучше заверните вещь в махровое полотенце и несильно отожмите.\nСушить в расправленном состоянии на горизонтальной поверхности на сухой ткани. \nУтюжить через влажную ткань при температуре не более 110 °С. \nДопускается химическая чистка.",
};

const collectionLinks = await getCollections()
  .then(result =>
    result.map((collection: ICollection) => ({
      id: collection.id,
      title: collection.title,
      link: `/collections/${collection.id}`,
    }))
  )
  .catch(() => []);

export const HEADER_MENU_LIST = [
  {
    id: 0,
    title: "Главная",
    href: "/",
  },
  {
    id: 1,
    title: "XMAS PACK",
    href: "/collections/0",
  },
  {
    id: 2,
    title: "UNIVERSITY",
    href: "/collections/3",
  },
  {
    id: 3,
    title: "КОЛЛЕКЦИИ",
    href: "/collections",
    subLinks: collectionLinks,
  },
  {
    id: 4,
    title: "ОДЕЖДА",
    href: "/products",
    subLinks: [
      {
        id: 0,
        title: "Футболки",
        href: "/products?category=t-shirt",
      },
      {
        id: 1,
        title: "Шарфы",
        href: "/products?category=scarf",
      },
      {
        id: 2,
        title: "Худи",
        href: "/products?category=hoodie",
      },
      {
        id: 3,
        title: "Наборы",
        href: "/products?category=set",
      },
      {
        id: 4,
        title: "Носки",
        href: "/products?category=socks",
      },
      {
        id: 5,
        title: "Свитеры",
        href: "/products?category=blouse",
      },
    ],
  },
  {
    id: 5,
    title: "Подарочные сертификаты",
    href: "/pay-shipping",
  },
  {
    id: 6,
    title: "Артистам",
    href: "/forartist",
  },
  {
    id: 7,
    title: "Контакты",
    href: "/contacts",
  },
  {
    id: 8,
    title: "Github Автора",
    href: "https://github.com/victor-maznichenko",
  },
];
