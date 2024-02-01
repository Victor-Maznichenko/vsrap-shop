import { BASE_URL } from "../constants";
import { Product } from "@/lib/types";

export const getProducts = async (limit = -1, collectionId = -1): Promise<Array<Product>> => {
	const collectionParam = collectionId !== -1 ? `&collectID=${collectionId}` : "";

	const response = await fetch(`${BASE_URL}/products?_limit=${limit}${collectionParam}`, {
		next: {
			revalidate: 30,
		},
	});

	if (!response.ok) throw new Error("Unable to fetch products.");

	return response.json() as Promise<Array<Product>>;
};
