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
          <img src={Collection1} alt="Man Collection" className="col-picture" />
          <p className="col-name">Man</p>
        </Link>
        <Link to="/" className="col-card">
          <img
            src={Collection2}
            alt="Woman Collection"
            className="col-picture"
          />
          <p className="col-name">Woman</p>
        </Link>
        <Link to="/" className="col-card">
          <img
            src={Collection3}
            alt="Kids Collection"
            className="col-picture"
          />
          <p className="col-name">Kids</p>
        </Link>
      </div>
    </div>
  );
}
