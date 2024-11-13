import "./prod-list.style.scss";
import { Link, useLocation } from "react-router-dom";
import { useCustom } from "@/core/context";
import { useTranslation } from "react-i18next";
import type { ListDefinition } from "../products.type";
import PRODUCTS from "@/core/data/_products";

const ProductsList: React.FC<ListDefinition> = ({
  title,
  subtitle,
  columns = 4,
  gap = 2,
  products = PRODUCTS,
}) => {
  const location = useLocation();
  const { t } = useTranslation();
  const { getSettingValue } = useCustom();

  return (
    <div className="products-list-container">
      {title && getSettingValue("product-list", "headlines") && (
        <div className="section-headlines">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      )}
      <div
        className={`products-cards ${getSettingValue("product-list", "style")}`}
        style={{ "--columns": columns, "--gap": gap }}>
        {products.map(
          (product) =>
            (product.collection_id ===
              getSettingValue("product-list", "collection_id") ||
              location.pathname.includes("collections")) && (
              <Link to="/product" key={product.id} className="prod-card">
                <img
                  className="prod-picture"
                  src={product.img}
                  alt={product.id}
                />
                <div className="prod-info">
                  <p className="prod-title">
                    {t(`sections.products.list.items.${product.id}`)}
                  </p>
                  <div className="prod-price">
                    <span className="after">
                      {product.price.after} {t("common.currency")}
                    </span>
                    {product.price.before && (
                      <span className="before">
                        {product.price.before} {t("common.currency")}
                      </span>
                    )}
                  </div>
                  {getSettingValue("product-list", "style") ===
                    "with-button" && <button className="icon">Buy now</button>}
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ProductsList;
