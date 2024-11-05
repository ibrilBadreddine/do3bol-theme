import "../style.scss";
import { Link } from "react-router-dom";
import Icon from "@/views/components/shared/icons";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      <div className="not-found-box">
        <div className="box-content">
          <h1 className="box-error">{t("pages.not-found.code")}</h1>
          <h1 className="box-title">{t("pages.not-found.title")}</h1>
          <p className="box-subtitle">{t("pages.not-found.subtitle")}</p>
        </div>
        <div className="box-actions">
          <Link to="/" className="back-link">
            <Icon name="arrow_left" />
            {t("pages.not-found.action")}
          </Link>
        </div>
      </div>
    </div>
  );
}
