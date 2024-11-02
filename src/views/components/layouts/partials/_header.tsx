import { useState } from "react";
import { Link } from "react-router-dom";
import StoreLogo from "@/assets/images/logo.png";
import Icon from "@components/shared/icons";
import Cart from "@/views/components/shared/cart";

export default function Header() {
  const [search, setSearch] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(false);

  return (
    <header className="header-container">
      <div className="links-box">
        <Link to="/">Home</Link>
        <Link to="/">Man</Link>
        <Link to="/">Woman</Link>
        <Link to="/">Kids</Link>
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
              <input type="search" placeholder="Search..." />
              <div className="links">
                <Link to="/">
                  Home <Icon name="arrow_right_up" />
                </Link>
                <Link to="/">
                  Man <Icon name="arrow_right_up" />
                </Link>
                <Link to="/">
                  Woman <Icon name="arrow_right_up" />
                </Link>
                <Link to="/">
                  Kids <Icon name="arrow_right_up" />
                </Link>
              </div>
            </div>
          </div>
          <div className="menu-overlay overlay" />
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
          <input type="search" placeholder="Search..." />
        </div>
        <button onClick={() => setSearch(!search)} className="icon search-btn">
          <Icon name={!search ? "search" : "close"} />
        </button>
        <button onClick={() => setCart(true)} className="icon cart-btn">
          <Icon name="cart" />
          <span>0 MAD</span>
        </button>
      </div>

      <Cart isOpen={cart} setModal={setCart} />
    </header>
  );
}
