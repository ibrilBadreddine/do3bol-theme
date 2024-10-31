import ProductsList from "@/views/components/sections/products/list";

export default function Result() {
  return (
    <div className="result-box">
      <ProductsList gap={1} length={6} />
    </div>
  );
}
