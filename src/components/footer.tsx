import Image from "next/image";
import Link from "next/link";

import Socials from "./ui/Socials";
import "@/styles/components/footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <div className="footer__block">
          <Link className="footer__logo" href="/">
            <Image src="/images/logo-white.png" width={120} height={18.3} alt="VSRAP logotype" />
          </Link>
          <Socials className="footer__socials" />
          <p className="footer__copyright">© 2024 VSRAP</p>
        </div>

        <div className="footer__block footer__company">
          <div className="footer__company-info">
            <p>ИП Ганин Максим Александрович</p>
            <p>ИНН: 744410767676</p>
            <p>ОГРНИП: 317745600008299</p>
          </div>
          <a href="mailto:victor_maznichenko@mail.ru">shop@vsrap.com</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
