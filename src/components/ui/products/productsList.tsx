import ProductCard from "./productCard";
import "@/assets/styles/components/ui/products/productsList.scss";
import { getProducts } from "@/lib/services/getProducts";

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
