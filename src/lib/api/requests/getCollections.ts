import { ICollection } from "@/lib/types";

import { BASE_URL } from "../constants";

export const getCollections = async (limit = -1): Promise<Array<ICollection>> => {
  const response = await fetch(`${BASE_URL}/collections?_limit=${limit}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch collections.");

  return response.json() as Promise<Array<ICollection>>;
};
