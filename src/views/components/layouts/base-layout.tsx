import "./style.scss";
import Header from "./partials/_header";
import Footer from "./partials/_footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="base-app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
