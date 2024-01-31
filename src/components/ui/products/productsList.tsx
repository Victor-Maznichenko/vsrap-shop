import React from "react";
import { getProducts } from "@/lib/services/getProducts";
import ProductCard from "./productCard";

const ProductsList = async ({ count = -1 }) => {
	const products = await getProducts(count);

	return (
		<div className="products__list">
			{products.map(({ images, price, title, id }) => (
				<div className="products__list-item" key={id}>
					<ProductCard
						title={title}
						images={images}
						price={price}
						id={id}
					/>
				</div>
			))}
		</div>
	);
};

export default ProductsList;
