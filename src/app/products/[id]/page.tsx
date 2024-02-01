import Products from "@/components/products";
import ProductsList from "@/components/products/productsList";
import Accordion from "@/components/ui/accordion";
import { getProducts, getProductById } from "@/lib/api/requests";
import { CARE_RECOMMENDATIONS } from "@/lib/constants";
import "@/styles/components/productPage.scss";
import { Product } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
	params: {
		id: number;
	};
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
	const [product] = await getProductById(id);

	return {
		title: `${product.title} `,
	};
}

export async function generateStaticParams() {
	const products: Array<Product> = await getProducts();

	return products.map(products => ({
		slug: products.id,
	}));
}

const Product = async ({ params: { id } }: Props) => {
	const [product] = await getProductById(id);

	return (
		<main className="product-page">
			<section className="product">
				<div className="container">
					<div className="product__inner">
						<div className="product__photos">
							{product.images.map((image, index) => (
								<div className="product__photo" key={index}>
									<Image src={image} fill alt="Изображение" />
								</div>
							))}
						</div>
						<aside className="product__info">
							<h2 className="product__title">{product.title}</h2>
							<Link className="product__back" href="/products">
								Все товары
							</Link>
							<div className="product__prices">
								<p className="product__current-price">{product.price} ₽</p>
							</div>
							<ul className="product__sizes">
								{product.sizes.map((size, index) => (
									<li
										className={`product__size ${index === 0 ? "active" : ""}`}
										key={index}
									>
										{size}
									</li>
								))}
							</ul>
							<button className="product__cart button-gray">В корзину</button>
							<div className="product__accordions">
								<Accordion
									title="О товаре"
									contentTitle={product.about.title}
									contentText={product.about.description}
								/>
								<Accordion
									title={CARE_RECOMMENDATIONS.title}
									contentTitle={CARE_RECOMMENDATIONS.contentTitle}
									contentText={CARE_RECOMMENDATIONS.contentText}
								/>
							</div>
						</aside>
					</div>
				</div>
			</section>

			<Products>
				<h2 className="section-title">Возможно, вас заинтересует</h2>
				<ProductsList count={4} />
			</Products>
		</main>
	);
};

export default Product;
