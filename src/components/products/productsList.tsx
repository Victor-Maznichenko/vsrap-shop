import ProductCard from "./productCard";
import { getProducts } from "@/lib/api/requests";
import "@/styles/components/products/productsList.scss";

const ProductsList = async ({ count, collectionId }: { count?: number; collectionId?: number }) => {
	const products = await getProducts(count, collectionId);
	return (
		<div className="products-list">
			{products.map(({ images, price, title, id }) => (
				<div className="products-list__item" key={id}>
					<ProductCard title={title} images={images} price={price} id={id} />
				</div>
			))}
		</div>
	);
};

export default ProductsList;
