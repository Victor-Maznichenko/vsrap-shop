import Products from "@/components/Products";
import ProductsList from "@/components/Products/ProductsList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Коллекции",
  description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

const ProductsPage = () => (
  <main className="products-page">
    <Products>
      <h2 className="section-title">Наши товары</h2>
      <ProductsList />
    </Products>
  </main>
);

export default ProductsPage;
