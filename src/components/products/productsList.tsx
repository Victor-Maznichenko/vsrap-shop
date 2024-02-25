import { getProducts } from "@/lib/api/requests";
import { ProductCardsSkeleton } from "@/ui/Skeletons";

import ProductCard from "./ProductCard";

import "@/styles/components/products/productsList.scss";

const ProductsList = async ({ count, collectionId }: { count?: number; collectionId?: number }) => {
  const products = await getProducts(count, collectionId);
  return (
    <div className="products-list">
      {products ? (
        products.map(product => (
          <div className="products-list__item" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))
      ) : (
        <ProductCardsSkeleton />
      )}
    </div>
  );
};

export default ProductsList;
