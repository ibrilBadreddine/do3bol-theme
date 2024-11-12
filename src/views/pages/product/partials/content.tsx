import { ChangeEvent, useState } from "react";
import Icon from "@components/shared/icons";
import Toast from "@components/shared/toast";
import { useTranslation } from "react-i18next";
import { useCustom } from "@/core/context";
import { useNavigate } from "react-router-dom";

export default function Content() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { baseTheme } = useCustom();

  const [cart, setCart] = useState<number>(1);
  const [hasError, setError] = useState<boolean>(false);
  const [checkout, setCheckout] = useState([
    {
      type: "text",
      value: "",
      placeholder: t(
        "pages.product.content.variants.form.fields.full_name.placeholder"
      ),
    },
    {
      type: "number",
      value: "",
      placeholder: t(
        "pages.product.content.variants.form.fields.phone.placeholder"
      ),
    },
    {
      type: "email",
      value: "",
      placeholder: t(
        "pages.product.content.variants.form.fields.email.placeholder"
      ),
    },
  ]);

  /**
   *
   * @param e
   * @param index
   */
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setCheckout(
      checkout.map((field, idx) =>
        index === idx ? { ...field, value: e.target.value } : field
      )
    );
  };

  const buyNow = () => {
    if (checkout.find((field) => !field.value)) {
      setError(true);
    } else {
      navigate("/thank-you");
    }
  };

  const VARIANTS = {
    color: (
      <div className="variant var-color">
        <label className="label">
          {t("pages.product.content.variants.color.label")}
        </label>
        <div className="options">
          <button
            className="color"
            style={{ backgroundColor: "#1d3557" }}></button>
          <button
            className="color"
            style={{ backgroundColor: "#ffff" }}></button>
          <button
            className="color"
            style={{ backgroundColor: "#faedcd" }}></button>
          <button
            className="color"
            style={{ backgroundColor: "#fb6f92" }}></button>
          <button
            className="color"
            style={{ backgroundColor: "#83c5be" }}></button>
        </div>
      </div>
    ),
    badge: (
      <div className="variant var-badge">
        <label className="label">
          {t("pages.product.content.variants.badge.label")}
        </label>
        <div className="options">
          <button className="icon">XS</button>
          <button className="icon">S</button>
          <button className="icon" disabled>
            M
          </button>
          <button className="icon">L</button>
          <button className="icon">XL</button>
        </div>
      </div>
    ),
    countdown: (
      <div className="countdown-box">
        <div className="visitors">
          <span>10</span> {t("pages.product.content.countdown.visitors")}
        </div>
        <div className="time">
          <div className="tab">
            <span>10</span> {t("pages.product.content.countdown.time.days")}
          </div>
          <div className="tab">
            <span>22</span> {t("pages.product.content.countdown.time.hours")}
          </div>
          <div className="tab">
            <span>58</span>
            {t("pages.product.content.countdown.time.minutes")}
          </div>
          <div className="tab">
            <span>16</span>
            {t("pages.product.content.countdown.time.seconds")}
          </div>
        </div>
      </div>
    ),
    form: (
      <form className="variant check-out-form">
        <label className="label">
          {t("pages.product.content.variants.form.label")}
        </label>
        <div className="inputs">
          {checkout.map((field, i) => (
            <input
              key={i}
              type={field.type}
              value={field.value}
              placeholder={field.placeholder}
              onChange={(e) => handleInputChange(e, i)}
            />
          ))}
        </div>
      </form>
    ),
    radio: (
      <div className="variant var-radio">
        <label className="label">
          {t("pages.product.content.variants.radio.label")}
        </label>
        <div className="options">
          <label>
            <input type="radio" name="fit" />
            {t("pages.product.content.variants.radio.options.regular")}
          </label>
          <label>
            <input type="radio" name="fit" />
            {t("pages.product.content.variants.radio.options.oversized")}
          </label>
          <label>
            <input type="radio" name="fit" />
            {t("pages.product.content.variants.radio.options.relaxed")}
          </label>
        </div>
      </div>
    ),
    dropdown: (
      <div className="variant var-dropdown">
        <label className="label">
          {t("pages.product.content.variants.dropdown.label")}
        </label>
        <select>
          <option value="">
            {t("pages.product.content.variants.dropdown.options.default")}
          </option>
          <option value="solid">
            {t("pages.product.content.variants.dropdown.options.solid")}
          </option>
          <option value="striped">
            {t("pages.product.content.variants.dropdown.options.striped")}
          </option>
          <option value="plaid">
            {t("pages.product.content.variants.dropdown.options.plaid")}
          </option>
          <option value="floral">
            {t("pages.product.content.variants.dropdown.options.floral")}
          </option>
        </select>
      </div>
    ),
  };
  return (
    <div className="product-content">
      <div className="content-head">
        <h2 className="prod-title">{t("pages.product.content.title")}</h2>
        <div className="prod-review">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} name={i + 1 > 4 ? "star_outline" : "star_solid"} />
            ))}
          </div>
          4.0
        </div>
        <h2 className="prod-price">999 {t("common.currency")}</h2>
      </div>
      <div className="content-core">
        {baseTheme.variants.map(
          (variant) =>
            variant.is_visible && (
              <div className="custom-variant" key={variant.id}>
                {VARIANTS[variant.id]}
              </div>
            )
        )}
        <div className="add-to-cart-box">
          <div className="quantity">
            <button
              onClick={() => setCart((prevCart) => --prevCart)}
              className="minus-quantity icon"
              disabled={cart === 1}>
              <Icon name="minus" />
            </button>
            <span className="quantity-value">{cart}</span>
            <button
              onClick={() => setCart((prevCart) => ++prevCart)}
              className="add-quantity icon">
              <Icon name="plus" />
            </button>
          </div>
          <button onClick={() => buyNow()} className="add-btn primary">
            {t("pages.product.checkout.action")}
          </button>
        </div>
      </div>
      <article className="content-description">
        <div className="desc-section">
          <h4>{t("pages.product.content.description.chunk_1.title")}</h4>
          <p>{t("pages.product.content.description.chunk_1.details")}</p>
        </div>
        <div className="desc-section">
          <h4>{t("pages.product.content.description.chunk_2.title")}</h4>
          <p>{t("pages.product.content.description.chunk_2.details")}</p>
        </div>
      </article>

      <Toast variant="error" show={hasError} close={setError} />
    </div>
  );
}
