import { useState } from "react";
import Preview1 from "@/assets/images/product-1.jpg";
import Preview2 from "@/assets/images/detail-1.jpg";
import Preview3 from "@/assets/images/detail-3.jpg";
import Preview4 from "@/assets/images/detail-4.jpg";
import Preview5 from "@/assets/images/detail-5.jpg";

export default function Media() {
  const OPTIONS = [Preview1, Preview2, Preview3, Preview4, Preview5];
  const [mainPicture, setMainPicture] = useState<string>(Preview1);
  const activeIndex = OPTIONS.findIndex((item) => item === mainPicture) + 1;

  return (
    <div className="product-media">
      <div className="media-preview">
        <img className="img-preview" src={mainPicture} alt="preview" />
        <span className="per-page">
          {activeIndex} / {OPTIONS.length}
        </span>
      </div>
      <div className="media-options">
        {OPTIONS.map((opt, i) => (
          <button
            key={i}
            data-active-image={activeIndex === i + 1}
            onClick={() => setMainPicture(OPTIONS[i])}>
            <img src={opt} alt={`option-${i}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
