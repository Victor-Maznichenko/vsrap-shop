export interface IProduct {
  id: number;
  price: number;
  oldPrice: number;
  images: Array<string>;
  type: "t-shirt" | "set" | "cap" | "hoodie" | "socks";
  collectID: number;
  title: string;
  sizes: Array<string>;
  about: {
    title: string;
    description: string;
  };
}
