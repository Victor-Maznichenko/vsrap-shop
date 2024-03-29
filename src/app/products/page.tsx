import Products from "@/components/ui/products/products";
import type { Metadata } from "next";
import ProductsList from "@/components/ui/products/productsList";

export const metadata: Metadata = {
	title: "Коллекции",
	description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

const ProductsPage = () => (
	<main className="products">
		<Products>
			<h2 className="section-title">Наши товары</h2>
			<ProductsList />
		</Products>
	</main>
);

export default ProductsPage;
