import "./slider.style.scss";
import { useRef, useState } from "react";
import type { SliderDefinition } from "./slider.type";
import Icon from "@/views/components/shared/icons";
import SliderV1 from "@/assets/images/slider.jpg";
import SliderV2 from "@/assets/images/slider-v2.jpg";
import SliderV3 from "@/assets/images/slider-v3.jpg";
import { useTranslation } from "react-i18next";
import { useCustom } from "@/core/context";
import { Link } from "react-router-dom";

const Slider: React.FC<SliderDefinition> = ({
  orientation,
  content,
  perPage = 3,
  arrows = false,
  width = "50%",
  height = "500px",
}) => {
  const { t, i18n } = useTranslation();
  const { getSetting } = useCustom();

  const ITEMS = [SliderV1, SliderV2, SliderV3];

  const PER_PAGE = perPage;
  const TOTAL = ITEMS.length;
  const IS_VERTICAL = orientation === "vertical";

  const slider = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [translatePos, setTranslatePos] = useState(0);

  const changeIndex = (delta: 1 | -1) => {
    setIndex((prevIndex) =>
      Math.max(0, Math.min(TOTAL - PER_PAGE, prevIndex + delta))
    );
    setTranslatePos(0);
  };

  return (
    <div
      className="slider-container"
      data-orientation={IS_VERTICAL ? "vertical" : "horizontal"}
      data-style={getSetting("slider", "style")?.value}
      style={{
        "--per-page": PER_PAGE,
        "--gap": 10,
        "--width": width,
        "--height": height,
      }}>
      <div className="slider-area">
        <div className="slider-box" ref={slider}>
          <div
            className="slider-inner"
            style={{
              transform: `${IS_VERTICAL ? `translateY` : `translateX`}(calc(${
                i18n.language === "ar" ? "" : "-"
              }${index * (100 / PER_PAGE)}% + ${translatePos}px))`,
            }}>
            {ITEMS.map((item, i) => (
              <div className="slider-item" key={i}>
                <img
                  className="slider-content slider-image"
                  src={item}
                  alt={`Slide ${i}`}
                  loading="lazy"
                />
                {content && getSetting("slider", "show_content")?.value && (
                  <div className="item-content">
                    <p>{t("sections.slider.title")}</p>
                    <Link to="collections/" className="link-btn secondary">
                      {t("sections.slider.action")}
                      <Icon name="arrow_right_up" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {arrows && (
        <div className="slider-arrows">
          <button
            className="slider-control"
            disabled={index === 0}
            onClick={() => changeIndex(-1)}
            aria-label="previous slide">
            <Icon name="arrow_left" size={15} />
          </button>
          <button
            className="slider-control"
            disabled={index === TOTAL - PER_PAGE}
            onClick={() => changeIndex(1)}
            aria-label="next slide">
            <Icon name="arrow_right" size={15} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
