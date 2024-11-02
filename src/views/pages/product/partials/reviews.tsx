import { useState } from "react";
import Icon from "@/views/components/shared/icons";
import ProductsReviews from "@/views/components/sections/products/reviews";
import ModalSticky from "@/views/components/shared/modal/sticky/modal-sticky";
import Upload from "@/views/components/shared/upload";

export default function Reviews() {
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="reviews-area">
      <div className="reviews-head">
        <h3>Customer reviews</h3>
        <button className="primary">
          Add your review <Icon name="plus" />
        </button>
        <button onClick={() => setReviewModal(true)} className="icon">
          <Icon name="plus" />
        </button>
      </div>
      <ProductsReviews />

      <ModalSticky
        title="How is your order?"
        subtitle="Please take a moment to rate and review"
        isOpen={reviewModal}
        setModal={setReviewModal}>
        <div className="review-form">
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
      </ModalSticky>
    </div>
  );
}
