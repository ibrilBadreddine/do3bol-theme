import ProductsList from "@components/sections/products/list";
import Empty from "@components/shared/empty";

export default function Result() {
  return (
    <div className="result-box">
      <ProductsList gap={1} length={6} />
      {/* <Empty
        title="No products found!"
        subtitle="Your search didn't match any product, Please try again."
        icon="search"
      /> */}
    </div>
  );
}
