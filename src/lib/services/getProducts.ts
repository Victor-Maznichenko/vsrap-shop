import { BASE_URL } from "../constants";

export interface IProduct {
	id: number;
	price: number;
	oldPrice: number;
	images: Array<string>;
	type: "t-shirt" | "set" | "cap" | "hoodie" | "socks";
	collectID: number;
	title: string;
	sizes: Array<string>;
	about: {
		title: string;
		description: string;
	};
}

export const getProducts = async (
	limit = -1,
	collectionId = -1,
): Promise<Array<IProduct>> => {
	const collectionParam =
		collectionId !== -1 ? `&collectID=${collectionId}` : "";
	const response = await fetch(
		`${BASE_URL}/products?_limit=${limit}${collectionParam}`,
		{
			next: {
				revalidate: 30,
			},
		},
	);

	if (!response.ok) throw new Error("Unable to fetch products.");

	return response.json() as Promise<Array<IProduct>>;
};

export const getProductById = async (id: number): Promise<Array<IProduct>> => {
	const response = await fetch(`${BASE_URL}/products?id=${id}`, {
		next: {
			revalidate: 30,
		},
	});

	if (!response.ok) throw new Error("Unable to fetch product.");

	return response.json() as Promise<Array<IProduct>>;
};
