import CollectionBanners from "@/components/ui/collections/collectionBanners";
import CollectionList from "@/components/ui/collections/collectionList";
import Collections from "@/components/ui/collections/collections";
import Products from "@/components/ui/products/products";
import ProductsList from "@/components/ui/products/productsList";
import Link from "next/link";

export default async function Home() {
	return (
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
}
