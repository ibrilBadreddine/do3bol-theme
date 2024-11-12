import { useCustom } from "@/core/context";
import Icon from "@/views/components/shared/icons";
import { useTranslation } from "react-i18next";

export default function CustomOptions() {
  const { t } = useTranslation();
  const { theme, setItem } = useCustom();
  const itemType = window.location.pathname.includes("product")
    ? "variants"
    : "sections";

  // TODO: TO remove...
  const itemStyle = {
    slider: 2,
    box: 4,
    content: 1,
    collections: 3,
    "product-list": 3,
    "product-reviews": 2,
    color: 1,
    badge: 1,
    countdown: 3,
    form: 1,
    radio: 1,
    dropdown: 3,
  };
  return (
    <div className="options">
      {theme[itemType].map((item) => (
        <div key={item.id} className="option-box">
          <button
            className={`box-shape icon ${item.id}`}
            data-selected={item.id === theme.selected_item}
            onClick={() => setItem(item.id)}>
            {[...Array(itemStyle[item.id])].map((_, i) => (
              <div key={i} className="shape" />
            ))}
            <Icon className="box-check" name="check_circle_solid" size={25} />
          </button>
          <p className="box-name">
            {t(`components.config.custom.${itemType}.${item.id}.title`)}
          </p>
        </div>
      ))}
    </div>
  );
}
