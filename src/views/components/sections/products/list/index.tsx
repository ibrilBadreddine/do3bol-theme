import "./prod-list.style.scss";
import { Link } from "react-router-dom";
import Product1 from "@/assets/images/product-1.jpg";
import Product2 from "@/assets/images/product-2.jpg";
import Product3 from "@/assets/images/product-3.jpg";
import Product4 from "@/assets/images/product-4.jpg";
import type { ListDefinition } from "../products.type";
import { useCustom } from "@/core/context";
import PRODUCTS from "@/core/data/_products";

const ProductsList: React.FC<ListDefinition> = ({
  title,
  subtitle,
  style = "default",
  columns = 4,
  gap = 2,
  length = 4,
}) => {
  const { getSetting } = useCustom();

  // const PRODUCTS = [
  //   { title: "Boxy fit patch sweatshirt", price: 999.0, img: Product1 },
  //   { title: "Colour block technical jacket", price: 599.0, img: Product2 },
  //   { title: "Washed carpenter trousers", price: 699.0, img: Product3 },
  //   { title: "Textured sweater", price: 499.0, img: Product4 },
  //   { title: "Washed carpenter trousers", price: 699.0, img: Product3 },
  //   { title: "Textured sweater", price: 499.0, img: Product4 },
  //   { title: "Boxy fit patch sweatshirt", price: 999.0, img: Product1 },
  //   { title: "Colour block technical jacket", price: 599.0, img: Product2 },
  // ];

  return (
    <div className="products-list-container">
      {title && getSetting("product-list", "headlines")?.value && (
        <div className="section-headlines">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      )}
      <div
        className={`products-cards ${
          getSetting("product-list", "style")?.value
        }`}
        style={{ "--columns": columns, "--gap": gap }}>
        {PRODUCTS.map(
          (product) =>
            product.collection_id ===
              getSetting("product-list", "collection_id")?.value && (
              <Link to="/product" key={product.id} className="prod-card">
                <img
                  className="prod-picture"
                  src={product.img}
                  alt={product.id.replace("-", "")}
                />
                <div className="prod-info">
                  <p className="prod-title">{product.id.replace("-", " ")}</p>
                  <div className="prod-price">
                    <span className="after">{product.price.after} MAD</span>
                    {product.price.before && (
                      <span className="before">
                        {product.price.before * 0.5} MAD
                      </span>
                    )}
                  </div>
                  {getSetting("product-list", "style")?.value ===
                    "with-button" && <button className="icon">Buy now</button>}
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ProductsList;
