import Link from "next/link";

import Collections from "@/components/Collections";
import CollectionBanners from "@/components/Collections/CollectionBanners";
import CollectionList from "@/components/Collections/CollectionList";
import Products from "@/components/Products";
import ProductsList from "@/components/Products/ProductsList";

const Home = () => (
  <main className="home">
    <CollectionBanners className="home__collections" />

    <Collections>
      <h3 className="collections__title section-title">Коллекции</h3>
      <CollectionList count={8} />
      <Link href="/collections" className="button">
        Смотреть все
      </Link>
    </Collections>

    <Products>
      <h2 className="section-title">Наши товары</h2>
      <ProductsList count={8} />
      <Link href="/products" className="button">
        Смотреть все
      </Link>
    </Products>
  </main>
);

export default Home;
