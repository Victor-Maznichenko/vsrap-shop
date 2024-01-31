import { BASE_URL } from "../constants";

type ICollection = {
	id: number;
	title: string;
	previewPhoto: string;
	bannerPhoto: string;
	description: string;
	popularity: number;
	authorID: number;
	date: number;
};

type ICollections = Array<ICollection>;

export const getCollections = async (limit = -1): Promise<ICollections> => {
	const response = await fetch(`${BASE_URL}/collections?_limit=${limit}`, {
		next: {
			revalidate: 30,
		},
	});

	if (!response.ok) throw new Error("Unable to fetch collections.");

	return response.json() as Promise<ICollections>;
};
