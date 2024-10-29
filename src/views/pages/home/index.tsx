import "./style.scss";
import Slider from "@/views/components/sections/slider";

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
      <section className="hello" style={{ height: "300px" }}></section>
    </div>
  );
}
