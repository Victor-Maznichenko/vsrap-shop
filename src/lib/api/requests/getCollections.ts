import { BASE_URL } from "../constants";
import { Collection } from "@/lib/types";

export const getCollections = async (limit = -1): Promise<Array<Collection>> => {
	const response = await fetch(`${BASE_URL}/collections?_limit=${limit}`, {
		next: {
			revalidate: 30,
		},
	});

	if (!response.ok) throw new Error("Unable to fetch collections.");

	return response.json() as Promise<Array<Collection>>;
};
