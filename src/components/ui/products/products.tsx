import { ReactNode } from "react";
import "@/assets/styles/components/ui/products/products.scss";

type IProps = {
	children: ReactNode;
};

const Products = ({ children }: IProps) => {
	return (
		<section className="products">
			<div className="container">
				<div className="products__inner">{children}</div>
			</div>
		</section>
	);
};

export default Products;
