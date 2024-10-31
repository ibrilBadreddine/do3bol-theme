import "./style.scss";
import Content from "./partials/content";
import Media from "./partials/media";

export default function Product() {
  return (
    <div className="product-page">
      <div className="product-area">
        <Media />
        <Content />
      </div>
      <div className="reviews-area"></div>
      <div className="related-products-area"></div>
    </div>
  );
}
