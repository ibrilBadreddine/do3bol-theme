import "./prod-reviews.style.scss";
import Icon from "@/views/components/shared/icons";
import type { ReviewDefinition } from "../products.type";
import { useTranslation } from "react-i18next";

const ProductsReviews: React.FC<ReviewDefinition> = ({
  title,
  subtitle,
  columns = 4,
  gap = 2,
}) => {
  const { t } = useTranslation();

  const REVIEWS = [
    {
      rating: t("sections.products.reviews.item_1.rating"),
      writer: t("sections.products.reviews.item_1.writer"),
      review: t("sections.products.reviews.item_1.review"),
    },
    {
      rating: t("sections.products.reviews.item_2.rating"),
      writer: t("sections.products.reviews.item_2.writer"),
      review: t("sections.products.reviews.item_2.review"),
    },
    {
      rating: t("sections.products.reviews.item_3.rating"),
      writer: t("sections.products.reviews.item_3.writer"),
      review: t("sections.products.reviews.item_3.review"),
    },
    {
      rating: t("sections.products.reviews.item_4.rating"),
      writer: t("sections.products.reviews.item_4.writer"),
      review: t("sections.products.reviews.item_4.review"),
    },
  ];

  return (
    <div className="product-reviews-container">
      {title && (
        <div className="section-headlines">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      )}
      <div
        className="reviews-cards"
        style={{ "--columns": columns, "--gap": gap }}>
        {REVIEWS.map((review, i) => (
          <div key={i} className="review-card">
            <div className="review-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name={i + 1 > review.rating ? "star_outline" : "star_solid"}
                  />
                ))}
              </div>
            </div>
            <article className="review-content">
              <p>{review.review}</p>
              <span className="review-writer">
                <i>- {review.writer} -</i>
              </span>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsReviews;
