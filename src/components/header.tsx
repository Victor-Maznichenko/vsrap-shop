import Link from "next/link";
import Image from "next/image";
import Search from "./ui/search";
import "@/assets/styles/components/header.scss";
import PromoLine from "./ui/promoLine";

const Header = () => {
	return (
		<header className="header">
			<div className="header__top">
				<Link className="header__logo" href="/">
					<Image
						src="/images/logo.png"
						width={120}
						height={18}
						alt="VSRAP logotype"
					/>
				</Link>
				<div className="header__search">
					<Search />
				</div>
			</div>
			<div className="header__bottom">
				<div className="container">
					<div className="header__bottom-inner">
						<nav className="header__menu">
							<ul className="header__menu-list">
								{[...Array(12)].map((_, index) => (
									<li className="header__menu-item" key={index}>
										<Link
											className="header__menu-link disabled"
											href={"/"}
										>
											Главная
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<PromoLine href="/collections/0" text="XMAS PACK" />
		</header>
	);
};

export default Header;
