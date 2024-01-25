import Image from "next/image";
import Link from "next/link";
import Socials from "./ui/socials";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__blocks">
					<div className="footer__block">
						<Link href="/">
							<Image
								src="/images/logo-white.png"
								width={25}
								height={25}
								alt="VSRAP logotype"
							/>
						</Link>
						<Socials />
					</div>
					<div className="footer__block"></div>
					<div className="footer__block"></div>
					<div className="footer__block"></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
