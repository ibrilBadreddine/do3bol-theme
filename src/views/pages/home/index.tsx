import "./style.scss";
import Slider from "@/views/components/sections/slider";
import Collections from "@/views/components/sections/collections";
import ProductsList from "@/views/components/sections/products/list";
import ProductReviews from "@/views/components/sections/products/reviews";
import Box from "@/views/components/sections/box";
import Content from "@/views/components/sections/content";

export default function Home() {
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
          title="New arrivals"
          subtitle="Our new arrivals are built to withstand your activities while keeping you looking your best!"
        />
        <ProductReviews
          title="Real reviews, Real style"
          subtitle="Customer reviews on the styles they can’t get enough of."
        />
      </section>
    </div>
  );
}
