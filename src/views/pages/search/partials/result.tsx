import ProductsList from "@components/sections/products/list";
import Empty from "@components/shared/empty";
import { useTranslation } from "react-i18next";

export default function Result() {
  const { t } = useTranslation();

  return (
    <div className="result-box">
      {/* <ProductsList gap={1} length={6} /> */}
      <Empty
        title={t("pages.collections.partials.result.empty.title")}
        subtitle={t("pages.collections.partials.result.empty.subtitle")}
        icon="search"
      />
    </div>
  );
}
