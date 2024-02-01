import { BASE_URL } from "../constants";
import { Collection } from "@/lib/types";

export const getCollectionById = async (id: number): Promise<Array<Collection>> => {
	const response = await fetch(`${BASE_URL}/collections?id=${id}`, {
		next: {
			revalidate: 30,
		},
	});

	if (!response.ok) throw new Error("Unable to fetch product.");

	return response.json() as Promise<Array<Collection>>;
};
