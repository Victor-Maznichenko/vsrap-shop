import { ICollection } from "@/lib/types";

import { BASE_URL } from "../constants";

export const getCollectionById = async (id: number): Promise<Array<ICollection>> => {
  const response = await fetch(`${BASE_URL}/collections?id=${id}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch product.");

  return response.json() as Promise<Array<ICollection>>;
};
