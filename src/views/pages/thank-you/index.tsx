import "./style.scss";
import { Link } from "react-router-dom";
import ThankYouIcon from "@/assets/images/thank-you.png";
import Icon from "@/views/components/shared/icons";

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <div className="thank-you-box">
        <img src={ThankYouIcon} alt="Thank You" />
        <div className="box-content">
          <h1>Thanks for your order!</h1>
          <p>
            Your (practice) order is confirmed and on its way! Well, almost… 😉
          </p>
        </div>
        <div className="box-actions">
          <Link to="/" className="back-link">
            <Icon name="arrow_left" />
            Browse More Stuff
          </Link>
        </div>
      </div>
    </div>
  );
}
