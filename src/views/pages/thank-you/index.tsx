import "./style.scss";
import { Link } from "react-router-dom";
import ThankYouIcon from "@/assets/images/thank-you.png";
import Icon from "@/views/components/shared/icons";
import { useTranslation } from "react-i18next";

export default function ThankYou() {
  const { t } = useTranslation();

  return (
    <div className="thank-you-page">
      <div className="thank-you-box">
        <img src={ThankYouIcon} alt="Thank You" />
        <div className="box-content">
          <h1>{t("pages.thank-you.title")}</h1>
          <p>{t("pages.thank-you.subtitle")}</p>
        </div>
        <div className="box-actions">
          <Link to="/" className="back-link">
            <Icon name="arrow_left" />
            {t("pages.thank-you.action")}
          </Link>
        </div>
      </div>
    </div>
  );
}
