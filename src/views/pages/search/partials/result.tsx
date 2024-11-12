import { useTranslation } from "react-i18next";
import Empty from "@components/shared/empty";
import ProductsList from "@components/sections/products/list";
import type { ProductDefinition } from "@/core/types";

const Result: React.FC<{ products: ProductDefinition[] }> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <div className="result-box">
      {products.length ? (
        <ProductsList products={products} gap={1} />
      ) : (
        <Empty
          title={t("pages.collections.partials.result.empty.title")}
          subtitle={t("pages.collections.partials.result.empty.subtitle")}
          icon="search"
        />
      )}
    </div>
  );
};

export default Result;
