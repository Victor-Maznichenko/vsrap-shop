import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/components/ui/products/productCard.scss";

type IProps = {
	id: number;
	price: number;
	title: string;
	images: Array<string>;
};

const ProductCard = ({ title, price, images, id }: IProps) => {
	return (
		<Link href={`/products/${id}`} className="product-card">
			<div className="product-card__preview">
				<Image src={images[0]} fill alt={title} />
				<Image src={images[1]} fill alt={title} />
			</div>
			<h5 className="product-card__title">{title}</h5>
			<p className="product-card__price">{price} ₽</p>
		</Link>
	);
};

export default ProductCard;
