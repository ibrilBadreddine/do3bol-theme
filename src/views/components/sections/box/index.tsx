import "./box.style.scss";
import { useCustom } from "@/core/context";
import Icon from "@components/shared/icons";
import { useTranslation } from "react-i18next";

export default function Box() {
  const { t } = useTranslation();
  const { getSetting } = useCustom();

  const BOXES = [
    {
      title: t("sections.box.items.item_1.title"),
      subtitle: t("sections.box.items.item_1.subtitle"),
      icon: "sparkles",
    },
    {
      title: t("sections.box.items.item_2.title"),
      subtitle: t("sections.box.items.item_2.subtitle"),
      icon: "world",
    },
    {
      title: t("sections.box.items.item_3.title"),
      subtitle: t("sections.box.items.item_3.subtitle"),
      icon: "cube",
    },
    {
      title: t("sections.box.items.item_4.title"),
      subtitle: t("sections.box.items.item_4.subtitle"),
      icon: "rocket",
    },
  ];

  return (
    <div className="box-container">
      {getSetting("box", "headlines")?.value && (
        <div className="section-headlines">
          <h1>{t("sections.box.title")}</h1>
          <p>{t("sections.box.subtitle")}</p>
        </div>
      )}
      <div className="boxes-cards">
        {BOXES.map((box, i) => (
          <div key={i} className="box-card">
            <div className="box-icon">
              <Icon name={box.icon} size={25} />
            </div>
            <div className="box-info">
              <span className="box-title">{box.title}</span>
              <p className="box-subtitle">{box.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
