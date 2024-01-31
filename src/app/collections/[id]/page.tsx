import Products from "@/components/ui/products/products";
import type { Metadata } from "next";
import ProductsList from "@/components/ui/products/productsList";

export const metadata: Metadata = {
	title: "Коллекция",
	description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

type Props = {
	params: {
		id: number;
	};
};

const CollectionPage = ({ params: { id } }: Props) => (
	<main className="products">
		<Products>
			<h2 className="section-title">Коллекция</h2>
			<ProductsList collectionId={id} />
		</Products>
	</main>
);

export default CollectionPage;
