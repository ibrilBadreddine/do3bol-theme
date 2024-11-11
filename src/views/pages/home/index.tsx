import "./style.scss";
import Slider from "@/views/components/sections/slider";
import Collections from "@/views/components/sections/collections";
import ProductsList from "@/views/components/sections/products/list";
import ProductReviews from "@/views/components/sections/products/reviews";
import Box from "@/views/components/sections/box";
import Content from "@/views/components/sections/content";
import { useTranslation } from "react-i18next";
import { useCustom } from "@/core/context";

export default function Home() {
  const { baseTheme } = useCustom();
  const { t } = useTranslation();

  const SECTIONS = {
    slider: (
      <Slider
        orientation="horizontal"
        width="100%"
        height="80vh"
        perPage={1}
        arrows
        content
      />
    ),
    box: <Box />,
    collections: <Collections />,
    content: <Content />,
    "product-list": (
      <ProductsList
        title={t("pages.home.partials.product_list.title")}
        subtitle={t("pages.home.partials.product_list.subtitle")}
      />
    ),
    "product-reviews": (
      <ProductReviews
        title={t("pages.home.partials.product_reviews.title")}
        subtitle={t("pages.home.partials.product_reviews.subtitle")}
      />
    ),
  };
  return (
    <div className="home-page">
      {baseTheme.sections.map(
        (section) =>
          section.is_visible && (
            <div id={section.id} key={section.id}>
              {SECTIONS[section.id]}
            </div>
          )
      )}
    </div>
  );
}
