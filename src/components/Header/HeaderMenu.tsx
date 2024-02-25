import Link from "next/link";
import Skeleton from "react-loading-skeleton";

import { HEADER_MENU_LIST } from "@/lib/constants";

const HeaderMenu = () => (
  <nav className="header__menu">
    <ul className="header__menu-list">
      {HEADER_MENU_LIST.map(item => (
        <li className="header__menu-item" key={item.id}>
          <Link className="header__menu-link disabled" href={item.href}>
            {item.title || <Skeleton width={100} />}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderMenu;
