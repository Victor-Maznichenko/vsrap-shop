import "@/assets/styles/components/ui/promoLine.scss";
import Link from "next/link";

interface IProps {
	text: string;
	href: string;
}

const PromoLine = ({ text, href }: IProps) => (
	<Link href={href} className="promo-line">
		<ul className="promo-line__list">
			{[...Array(20)].map((_, index) => (
				<li className="promo-line__item" key={index}>
					{text}
				</li>
			))}
		</ul>
	</Link>
);

export default PromoLine;
