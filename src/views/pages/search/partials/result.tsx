import ProductsList from "@/views/components/sections/products/list";
import Icon from "@/views/components/shared/icons";

export default function Result() {
  return (
    <div className="result-box">
      <div className="result-head">
        <span className="result-count">4 Results found</span>
        <div className="result-styles">
          <button className="icon">
            <Icon name="squares" />
          </button>
          <button className="icon">
            <Icon name="view_columns" />
          </button>
        </div>
      </div>
      <div className="result-products">
        
      </div>
    </div>
  );
}
