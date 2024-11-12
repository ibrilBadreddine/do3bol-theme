import "./style.scss";
import { Link, useParams } from "react-router-dom";
import Icon from "@/views/components/shared/icons";
import Filter from "./partials/filter";
import Result from "./partials/result";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import PRODUCTS from "@/core/data/_products";
import type { ProductDefinition } from "@/core/types";

export default function Search() {
  const { t } = useTranslation();
  const { collection_id } = useParams();

  const [sort, setSort] = useState<{
    field: "price" | "newest" | "a-z";
    order: "asc" | "desc";
  }>({ field: "price", order: "asc" });

  const handleFilter = () => {
    const result = PRODUCTS.filter(
      (prod) => prod.collection_id === collection_id
    );
    switch (sort.field) {
      case "a-z":
        result.sort((a, b) =>
          sort.order === "asc"
            ? a.id.localeCompare(b.id)
            : b.id.localeCompare(a.id)
        );
        break;
      case "price":
        result.sort((a, b) =>
          sort.order === "asc"
            ? a.price.after - b.price.after
            : b.price.after - a.price.after
        );
        break;
      default:
        break;
    }
    return result;
  };

  const [filteredProducts, setProducts] = useState<ProductDefinition[]>(
    handleFilter()
  );

  useEffect(() => {
    setProducts(handleFilter());
  }, [collection_id, sort]);

  return (
    <div className="search-page">
      <div className="navigation-area">
        <Link to="/">{t("pages.collections.navigation.home")}</Link>
        <Icon name="chevron_right" size={12} />
        <Link to="/collections">
          {t("pages.collections.navigation.browse")}
        </Link>
      </div>
      <div className="browsing-area">
        <Filter products_length={filteredProducts.length} setSort={setSort} />
        <Result products={filteredProducts} />
      </div>
    </div>
  );
}
