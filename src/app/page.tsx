import Collections from "@/components/collections";
import CollectionBanners from "@/components/collections/collectionBanners";
import CollectionList from "@/components/collections/collectionList";
import Products from "@/components/products";
import ProductsList from "@/components/products/productsList";
import Link from "next/link";

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
