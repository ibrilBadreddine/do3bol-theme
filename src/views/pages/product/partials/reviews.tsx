import { useState } from "react";
import Icon from "@/views/components/shared/icons";
import Upload from "@/views/components/shared/upload";
import ProductsReviews from "@/views/components/sections/products/reviews";
import ModalFull from "@/views/components/shared/modal/full";
import ModalSticky from "@/views/components/shared/modal/sticky";

export default function Reviews() {
  const [rating, setRating] = useState<number>(0);
  const [reviewModal, setReviewModal] = useState<boolean>(false);

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
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email address" />
          <textarea placeholder="Type review..." />
          <Upload />
        </div>
        <div className="actions-box">
          <button className="icon" onClick={() => setReviewModal(false)}>
            Cancel
          </button>
          <button className="primary">Save</button>
        </div>
      </div>
    );
  };

  return (
    <div className="reviews-area">
      <div className="reviews-head">
        <h3>Customer reviews</h3>
        <button onClick={() => setReviewModal(true)} className="primary">
          Add your review <Icon name="plus" />
        </button>
        <button onClick={() => setReviewModal(true)} className="icon">
          <Icon name="plus" />
        </button>
      </div>
      <ProductsReviews />

      <div className="review-form">
        <ModalSticky
          title="How is your order?"
          subtitle="Please take a moment to rate and review"
          isOpen={reviewModal}
          setModal={setReviewModal}>
          <ReviewCore />
        </ModalSticky>
        <ModalFull
          title="How is your order?"
          subtitle="Please take a moment to rate and review"
          isOpen={reviewModal}
          width="500px"
          setModal={setReviewModal}>
          <ReviewCore />
        </ModalFull>
      </div>
    </div>
  );
}
