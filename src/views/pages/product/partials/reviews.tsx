import Icon from "@/views/components/shared/icons";
import ProductsReviews from "@/views/components/sections/products/reviews";

export default function Reviews() {
  return (
    <div className="reviews-area">
      <div className="reviews-head">
        <h3>Customer reviews</h3>
        <button className="primary">
          Add your review <Icon name="plus" />
        </button>
        <button className="icon">
          <Icon name="plus" />
        </button>
      </div>
      <ProductsReviews />
    </div>
  );
}
