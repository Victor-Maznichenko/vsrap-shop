import Products from "@/components/products";
import ProductsList from "@/components/products/productsList";
import { getCollectionById } from "@/lib/api/requests";
import type { Metadata } from "next";

type Props = {
	params: {
		id: number;
	};
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
	const [collection] = await getCollectionById(id);

	return {
		title: `${collection.title} `,
	};
}

const CollectionPage = async ({ params: { id } }: Props) => {
	const [collection] = await getCollectionById(id);

	return (
		<main className="products">
			<Products>
				<h2 className="section-title">{collection.title}</h2>
				<ProductsList collectionId={id} />
			</Products>
		</main>
	);
};

export default CollectionPage;
