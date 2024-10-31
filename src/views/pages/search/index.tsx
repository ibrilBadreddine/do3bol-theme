import "./style.scss";
import { Link } from "react-router-dom";
import Icon from "@/views/components/shared/icons";
import Filter from "./partials/filter";
import Result from "./partials/result";

export default function Search() {
  return (
    <div className="search-page">
      <div className="navigation-area">
        <Link to="/">Home</Link>
        <Icon name="chevron_right" size={12} />
        <Link to="/search">Browse products</Link>
      </div>
      <div className="browsing-area">
        <Filter />
        <Result />
      </div>
    </div>
  );
}
