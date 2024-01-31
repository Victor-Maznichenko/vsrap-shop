import Products from "@/components/ui/products/products";
import ProductsList from "@/components/ui/products/productsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Коллекции",
	description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

export default async function ProductsPage() {
	return (
		<main className="products">
			<Products>
				<h3 className="products__title section-title">Все товары:</h3>
				<ProductsList />
			</Products>
		</main>
	);
}
