import Icon from "@/views/components/shared/icons";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="product-content">
      <div className="content-head">
        <h2 className="prod-title">Boxy fit patch sweatshirt</h2>
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
        <form className="variant check-out-form">
          <label className="label">
            {t("pages.product.content.variants.form.label")}
          </label>
          <div className="inputs">
            <input
              type="text"
              placeholder={t(
                "pages.product.content.variants.form.fields.full_name.placeholder"
              )}
            />
            <input
              type="number"
              placeholder={t(
                "pages.product.content.variants.form.fields.phone.placeholder"
              )}
            />
            <input
              type="text"
              placeholder={t(
                "pages.product.content.variants.form.fields.email.placeholder"
              )}
            />
          </div>
        </form>
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
        <div className="variant var-dropdown">
          <label className="label">
            {t("pages.product.content.variants.dropdown.label")}
          </label>
          <select>
            <option value="">{t("pages.product.content.variants.dropdown.options.default")}</option>
            <option value="solid">{t("pages.product.content.variants.dropdown.options.solid")}</option>
            <option value="striped">{t("pages.product.content.variants.dropdown.options.striped")}</option>
            <option value="plaid">{t("pages.product.content.variants.dropdown.options.plaid")}</option>
            <option value="floral">{t("pages.product.content.variants.dropdown.options.floral")}</option>
          </select>
        </div>
        <div className="add-to-cart-box">
          <div className="quantity">
            <button className="minus-quantity icon">
              <Icon name="minus" />
            </button>
            <span className="value-add-quantity">0</span>
            <button className="add-quantity icon">
              <Icon name="plus" />
            </button>
          </div>
          <button className="add-btn primary">
            {t("pages.product.content.add_to_cart")}
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
    </div>
  );
}
