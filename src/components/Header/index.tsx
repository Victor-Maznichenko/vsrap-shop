import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

import PromoLine from "../ui/PromoLine";
import Search from "../ui/Search";

import HeaderMenu from "./HeaderMenu";
import "@/styles/components/header.scss";

const Header = () => (
  <header className="header">
    <div className="header__top">
      <Link className="header__logo" href="/">
        {<Image src="/images/logo.png" width={120} height={18} alt="VSRAP logotype" /> || (
          <Skeleton width={120} height={18} />
        )}
      </Link>
      <div className="header__search">
        <Search />
      </div>
    </div>
    <div className="header__bottom">
      <div className="container">
        <div className="header__bottom-inner">
          <HeaderMenu />
        </div>
      </div>
    </div>
    <PromoLine href="/collections/0" text="XMAS PACK" />
  </header>
);

export default Header;
