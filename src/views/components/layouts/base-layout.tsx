import "./style.scss";
import Header from "./partials/_header";
import Footer from "./partials/_footer";
import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div className="base-app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
