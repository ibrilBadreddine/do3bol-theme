import "../style.scss";
import { Link } from "react-router-dom";
import Icon from "@/views/components/shared/icons";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-box">
        <div className="box-content">
          <h1 className="box-error">404</h1>
          <h1 className="box-title">Oops! Page Not Found</h1>
          <p className="box-subtitle">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="box-actions">
          <Link to="/" className="back-link">
            <Icon name="arrow_left" />
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
}
