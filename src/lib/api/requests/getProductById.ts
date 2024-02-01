import { BASE_URL } from "../constants";
import { Product } from "@/lib/types";

export const getProductById = async (id: number): Promise<Array<Product>> => {
	const response = await fetch(`${BASE_URL}/products?id=${id}`, {
		next: {
			revalidate: 30,
		},
	});

	if (!response.ok) throw new Error("Unable to fetch product.");

	return response.json() as Promise<Array<Product>>;
};
