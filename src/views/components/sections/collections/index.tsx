import "./collections.style.scss";
import { Link } from "react-router-dom";
import Collection1 from "@/assets/images/man.jpg";
import Collection2 from "@/assets/images/woman.jpg";
import Collection3 from "@/assets/images/kids.jpg";

export default function Collections() {
  return (
    <div className="collections-container">
      <div className="section-headlines">
        <h1>Features collections</h1>
        <p>
          Dare to mx and match! Check our collections to level up your fashion
          game.
        </p>
      </div>
      <div className="collections-cards">
        <Link to="/" className="col-card">
          <img src={Collection1} alt="Man" className="col-picture" />
          <h4 className="col-name">Man</h4>
        </Link>
        <Link to="/" className="col-card">
          <img src={Collection2} alt="Woman" className="col-picture" />
          <h4 className="col-name">Woman</h4>
        </Link>
        <Link to="/" className="col-card">
          <img src={Collection3} alt="Kids" className="col-picture" />
          <h4 className="col-name">Kids</h4>
        </Link>
      </div>
    </div>
  );
}
