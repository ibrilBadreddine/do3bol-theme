import "./style.scss";
import Content from "./partials/content";
import Media from "./partials/media";
import Reviews from "./partials/reviews";
import ExpressCheckout from "./partials/checkout";
import ProductsList from "@/views/components/sections/products/list";

export default function Product() {
  return (
    <div className="product-page">
      <div className="product-area">
        <Media />
        <Content />
      </div>
      <Reviews />
      <ExpressCheckout />
      <div className="related-products-area"></div>
    </div>
  );
}
