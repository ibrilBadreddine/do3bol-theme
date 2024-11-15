import "./collections.style.scss";
import { Link } from "react-router-dom";
import Collection1 from "@/assets/images/man.jpg";
import Collection2 from "@/assets/images/woman.jpg";
import Collection3 from "@/assets/images/kids.jpg";
import { useTranslation } from "react-i18next";
import { useCustom } from "@/core/context";

export default function Collections() {
  const { t } = useTranslation();
  const { getSettingValue } = useCustom();

  return (
    <div className="collections-container">
      {getSettingValue("collections", "headlines") && (
        <div className="section-headlines">
          <h1>{t("sections.collections.title")}</h1>
          <p>{t("sections.collections.subtitle")}</p>
        </div>
      )}
      <div className="collections-cards">
        <Link to="/collections/man" className="col-card">
          <img
            src={Collection1}
            alt={t("sections.collections.items.man.tag")}
            className="col-picture"
          />
          <p className="col-name">{t("sections.collections.items.man.name")}</p>
        </Link>
        <Link to="/collections/woman" className="col-card">
          <img
            src={Collection2}
            alt={t("sections.collections.items.woman.tag")}
            className="col-picture"
          />
          <p className="col-name">
            {t("sections.collections.items.woman.name")}
          </p>
        </Link>
        <Link to="/collections/kids" className="col-card">
          <img
            src={Collection3}
            alt={t("sections.collections.items.kids.tag")}
            className="col-picture"
          />
          <p className="col-name">
            {t("sections.collections.items.kids.name")}
          </p>
        </Link>
      </div>
    </div>
  );
}
