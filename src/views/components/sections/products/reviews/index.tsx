import "./prod-reviews.style.scss";
import Icon from "@/views/components/shared/icons";

export default function ProductReviews() {
  const REVIEWS = [
    {
      rating: 5,
      writer: "Laila Hassan",
      review:
        "Absolutely love this sweatshirt! Super comfy and the boxy fit is perfect. Looks great with jeans or joggers!",
    },
    {
      rating: 4,
      writer: "Omar Al-Mansouri",
      review:
        "Great for casual days! Love the relaxed fit, though I wish it was a bit softer. Still, awesome look!",
    },
    {
      rating: 4,
      writer: "Yasmin Khaled",
      review:
        "Really cool design and the patches make it stand out. It’s a bit oversized, but that’s the vibe I wanted!",
    },
    {
      rating: 2,
      writer: "Ahmed Saeed",
      review:
        "It’s nice, but the boxy fit was a bit too wide for me. Love the style though – would size down next time.",
    },
  ];

  return (
    <div className="product-reviews-container">
      <div className="section-headlines">
        <h1>Real reviews, Real style</h1>
        <p>Customer reviews on the styles they can’t get enough of.</p>
      </div>
      <div className="reviews-cards">
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
}
