import { IProduct } from "@/lib/types";

import { BASE_URL } from "../constants";

export const getProducts = async (limit = -1, collectionId = -1): Promise<Array<IProduct>> => {
  const collectionParam = collectionId !== -1 ? `&collectID=${collectionId}` : "";

  const response = await fetch(`${BASE_URL}/products?_limit=${limit}${collectionParam}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch products.");

  return response.json() as Promise<Array<IProduct>>;
};
