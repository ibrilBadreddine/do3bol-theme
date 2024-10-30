import "./prod-list.style.scss";
import { Link } from "react-router-dom";
import Product1 from "@/assets/images/product-1.jpg";
import Product2 from "@/assets/images/product-2.jpg";
import Product3 from "@/assets/images/product-3.jpg";
import Product4 from "@/assets/images/product-4.jpg";

export default function ProductsList() {
  const PRODUCTS = [
    { title: "Boxy fit patch sweatshirt", price: 999.0, img: Product1 },
    { title: "Colour block technical jacket", price: 599.0, img: Product2 },
    { title: "Washed carpenter trousers", price: 699.0, img: Product3 },
    { title: "Textured sweater", price: 499.0, img: Product4 },
  ];

  return (
    <div className="products-list-container">
      <div className="section-headlines">
        <h1>New arrivals</h1>
        <p>
          Our new arrivals are built to withstand your activities while keeping
          you looking your best!
        </p>
      </div>
      <div className="products-cards style-1">
        {PRODUCTS.map((product, i) => (
          <Link to="/" key={i} className="prod-card">
            <img
              className="prod-picture"
              src={product.img}
              alt={product.title}
            />
            <div className="prod-info">
              <p className="prod-title">{product.title}</p>
              <div className="prod-price">
                <span className="after">{product.price} MAD</span>
                {i === 0 && (
                  <span className="before">{product.price * 0.5} MAD</span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="products-cards style-2">
        {PRODUCTS.map((product, i) => (
          <Link to="/" key={i} className="prod-card">
            <img
              className="prod-picture"
              src={product.img}
              alt={product.title}
            />
            <div className="prod-info">
              <p className="prod-title">{product.title}</p>
              <div className="prod-price">
                <span className="after">{product.price} MAD</span>
                {i === 0 && (
                  <span className="before">{product.price * 0.5} MAD</span>
                )}
              </div>
              <button className="icon">Buy now</button>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
}
