import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
	IProduct,
	getProductById,
	getProducts,
} from "@/lib/services/getProducts";
import { CARE_RECOMMENDATIONS } from "@/lib/constants";

import Accordion from "@/components/ui/accordion";
import "@/assets/styles/components/ui/products/product.scss";

export const metadata: Metadata = {
	title: "Продукт",
	description: "Копия сайта vsrap.shop в учебных целях", // аваы аыв вы аываыв а ыва ыва ыа ыва ыва
};

type Props = {
	params: {
		id: number;
	};
};

const Product = async ({ params: { id } }: Props) => {
	const [product] = await getProductById(id);

	return (
		<section className="product">
			<div className="container">
				<div className="product__inner">
					<div className="product__photos">
						{product.images.map((image, index) => (
							<div className="product__photo" key={index}>
								<Image src={image} fill alt="123" />
							</div>
						))}
					</div>

					<aside className="product__info">
						<h2 className="product__title">{product.title}</h2>
						<Link href="/products">Все товары</Link>
						<div className="product__prices">
							<p className="product__current-price">{product.price}</p>
						</div>
						<ul className="product__sizes">
							{product.sizes.map((size, index) => (
								<li className="product__size" key={index}>
									{size}
								</li>
							))}
						</ul>
						<button>В корзину</button>
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
	);
};

export async function generateStaticParams() {
	const products: Array<IProduct> = await getProducts();

	return products.map(products => ({
		slug: products.id,
	}));
}

export default Product;
