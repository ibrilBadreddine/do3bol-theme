import { useCustom } from "@/core/context";
import { useTranslation } from "react-i18next";

export default function CustomStyle() {
  const { t } = useTranslation();
  const { theme, setStyle } = useCustom();

  return (
    <div className="core-style">
      {theme.styles.map((style, i) => (
        <div className="field" key={i}>
          <label>{t(`components.config.custom.general.${style.id}`)}</label>
          <div className="options">
            {style.settings[0].options.map((opt) => (
              <button
                onClick={() => setStyle(style.id, opt.value)}
                className={`icon ${style.id}`}
                key={opt.value}
                style={{ backgroundColor: opt.value }}
                data-active-opt={opt.value === style.settings[0].value}>
                {style.id === "language" && opt.label}
                {style.id === "radius" && (
                  <div className={`border ${opt.value}`} />
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
