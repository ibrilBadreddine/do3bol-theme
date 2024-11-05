import "./content.style.scss";
import { useTranslation } from "react-i18next";

export default function Content() {
  const { t } = useTranslation();

  return (
    <div className="content-container">
      <h1>{t("sections.content")}</h1>
    </div>
  );
}
