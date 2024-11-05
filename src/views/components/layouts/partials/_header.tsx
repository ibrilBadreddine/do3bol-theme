import { useState } from "react";
import { Link } from "react-router-dom";
import StoreLogo from "@/assets/images/logo.png";
import Icon from "@components/shared/icons";
import Cart from "@/views/components/shared/cart";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [search, setSearch] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);

  return (
    <header className="header-container">
      <div className="links-box">
        <Link to="/">{t("layouts.header.links.home")}</Link>
        <Link to="/collections">{t("layouts.header.links.man")}</Link>
        <Link to="/collections">{t("layouts.header.links.woman")}</Link>
        <Link to="/collections">{t("layouts.header.links.kids")}</Link>
      </div>
      <div className="header-mobile" data-hidden={!menu}>
        <button
          onClick={() => setMenu(true)}
          className="menu-btn icon"
          aria-label="menu">
          <Icon name="burger_menu" size={20} />
        </button>
        <div className="menu-container">
          <div className="menu-box">
            <div className="menu-head">
              <img src={StoreLogo} alt="store logo" />
              <button onClick={() => setMenu(false)} className="icon">
                <Icon name="close" />
              </button>
            </div>
            <div className="menu-core">
              <input type="search" placeholder={t("layouts.header.search")} />
              <div className="links">
                <Link to="/">
                  {t("layouts.header.links.home")}
                  <Icon name="arrow_right_up" />
                </Link>
                <Link to="/collections">
                  {t("layouts.header.links.man")} <Icon name="arrow_right_up" />
                </Link>
                <Link to="/collections">
                  {t("layouts.header.links.woman")}
                  <Icon name="arrow_right_up" />
                </Link>
                <Link to="/collections">
                  {t("layouts.header.links.kids")}
                  <Icon name="arrow_right_up" />
                </Link>
              </div>
            </div>
          </div>
          <div
            onClick={() => setMenu(false)}
            className="menu-overlay overlay"
          />
        </div>
      </div>
      <div className="logo-box">
        <Link to="/">
          <img src={StoreLogo} alt="store logo" />
        </Link>
      </div>
      <div className="actions-box">
        <div className="search-bar" data-hidden={!search}>
          <Icon name="search" />
          <input type="search" placeholder={t("layouts.header.search")} />
        </div>
        <button onClick={() => setSearch(!search)} className="icon search-btn">
          <Icon name={!search ? "search" : "close"} />
        </button>
        <button onClick={() => setCart(true)} className="icon cart-btn">
          <span className="total-items">4</span>
          <Icon name="cart" />
          <span className="total-amount">0 {t("common.currency")}</span>
        </button>
      </div>

      <Cart isOpen={cart} setModal={setCart} />
    </header>
  );
}
