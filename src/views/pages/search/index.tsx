import "./style.scss";
import { Link } from "react-router-dom";
import Icon from "@/views/components/shared/icons";
import Filter from "./partials/filter";
import Result from "./partials/result";
import { useTranslation } from "react-i18next";

export default function Search() {
  const { t } = useTranslation();

  return (
    <div className="search-page">
      <div className="navigation-area">
        <Link to="/">{t("pages.collections.navigation.home")}</Link>
        <Icon name="chevron_right" size={12} />
        <Link to="/search">{t("pages.collections.navigation.browse")}</Link>
      </div>
      <div className="browsing-area">
        <Filter />
        <Result />
      </div>
    </div>
  );
}
