import { IProduct } from "@/lib/types";

import { BASE_URL } from "../constants";

export const getProductById = async (id: number): Promise<Array<IProduct>> => {
  const response = await fetch(`${BASE_URL}/products?id=${id}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch product.");

  return response.json() as Promise<Array<IProduct>>;
};
