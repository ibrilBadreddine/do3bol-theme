import { useState } from "react";
import Icon from "@/views/components/shared/icons";
import Upload from "@/views/components/shared/upload";
import ProductsReviews from "@/views/components/sections/products/reviews";
import ModalFull from "@/views/components/shared/modal/full";
import ModalSticky from "@/views/components/shared/modal/sticky";
import { useTranslation } from "react-i18next";
import Toast from "@components/shared/toast";

export default function Reviews() {
  const { t } = useTranslation();
  const [rating, setRating] = useState<number>(0);
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);

  // TODO: Just for preview
  const save = () => {
    setReviewModal(false);
    setError(true);
  };
  const ReviewCore = () => {
    return (
      <div className="review-core">
        <div className="rate-box">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <button
                key={i}
                onClick={() => setRating(i + 1)}
                className={rating > i ? "active-rate" : ""}>
                <Icon name="star_outline" size={35} />
              </button>
            ))}
          </div>
        </div>
        <div className="information-box">
          <input
            type="text"
            placeholder={t("pages.product.reviews.core.fields.first_name")}
          />
          <input
            type="text"
            placeholder={t("pages.product.reviews.core.fields.last_name")}
          />
          <input
            type="email"
            placeholder={t("pages.product.reviews.core.fields.email")}
          />
          <textarea
            placeholder={t("pages.product.reviews.core.fields.review")}
          />
          <Upload />
        </div>
        <div className="actions-box">
          <button className="icon" onClick={() => setReviewModal(false)}>
            {t("pages.product.reviews.core.actions.cancel")}
          </button>
          <button className="primary" onClick={save}>
            {t("pages.product.reviews.core.actions.save")}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="reviews-area">
      <div className="reviews-head">
        <h3>{t("pages.product.reviews.head.title")}</h3>
        <button onClick={() => setReviewModal(true)} className="primary">
          {t("pages.product.reviews.head.action")} <Icon name="plus" />
        </button>
        <button onClick={() => setReviewModal(true)} className="icon">
          <Icon name="plus" />
        </button>
      </div>
      <ProductsReviews />

      <div className="review-form">
        <ModalSticky
          title={t("pages.product.reviews.core.title")}
          subtitle={t("pages.product.reviews.core.subtitle")}
          isOpen={reviewModal}
          setModal={setReviewModal}>
          <ReviewCore />
        </ModalSticky>
        <ModalFull
          title={t("pages.product.reviews.core.title")}
          subtitle={t("pages.product.reviews.core.subtitle")}
          isOpen={reviewModal}
          width="500px"
          setModal={setReviewModal}>
          <ReviewCore />
        </ModalFull>
      </div>

      <Toast variant="error" show={hasError} close={setError} />
    </div>
  );
}
