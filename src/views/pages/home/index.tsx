import "./style.scss";
import Slider from "@/views/components/sections/slider";
import Collections from "@/views/components/sections/collections";
import ProductsList from "@/views/components/sections/products/list";

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
      <section className="collections-area">
        <Collections />
      </section>
      <section className="products-list-area">
        <ProductsList />
      </section>
    </div>
  );
}
