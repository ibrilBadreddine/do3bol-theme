import "./style.scss";
import Content from "./partials/content";
import Media from "./partials/media";
import Reviews from "./partials/reviews";
import ExpressCheckout from "./partials/checkout";

export default function Product() {
  return (
    <div className="product-page">
      <div className="product-area">
        <Media />
        <Content />
      </div>
      <Reviews />
      <ExpressCheckout />
    </div>
  );
}
