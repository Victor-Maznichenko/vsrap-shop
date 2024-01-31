import {
	IProduct,
	getProductById,
	getProducts,
} from "@/lib/services/getProducts";
import React from "react";

type Props = {};

export async function generateStaticParams() {
	const products: Array<IProduct> = await getProducts();

	return products.map(products => ({
		slug: products.id,
	}));
}

const Product = async ({ params: { id } }) => {
	const product = await getProductById(id);
	return <div>123</div>;
};

export default Product;
