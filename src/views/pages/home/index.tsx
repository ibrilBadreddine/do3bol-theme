import "./style.scss";
import Slider from "@/views/components/sections/slider";
import Collections from "@/views/components/sections/collections";
import ProductsList from "@/views/components/sections/products/list";
import ProductReviews from "@/views/components/sections/products/reviews";
import Box from "@/views/components/sections/box";
import Content from "@/views/components/sections/content";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      <section className="slider-area">
        <Slider
          orientation="horizontal"
          width="100%"
          height="80vh"
          perPage={1}
          arrows
        />
      </section>
      <section className="core-area">
        <Box />
        <Collections />
        <Content />
        <ProductsList
          title={t("pages.home.partials.product_list.title")}
          subtitle={t("pages.home.partials.product_list.subtitle")}
        />
        <ProductReviews
          title={t("pages.home.partials.product_reviews.title")}
          subtitle={t("pages.home.partials.product_reviews.subtitle")}
        />
      </section>
    </div>
  );
}
