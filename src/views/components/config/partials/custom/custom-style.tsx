import { useCustom } from "@/core/context";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CustomStyle() {
  const { t, i18n } = useTranslation();
  const { setLanguage, setColor, setRadius } = useCustom();

  const [styles, setStyles] = useState([
    {
      id: "lang",
      label: t("components.config.custom.general.language"),
      value: i18n.language,
      options: [
        { label: t("common.en"), value: "en" },
        { label: t("common.ar"), value: "ar" },
      ],
    },
    {
      id: "color",
      label: t("components.config.custom.general.color"),
      value: "#121212",
      options: [
        { label: "Black", value: "#121212" },
        { label: "Green", value: "#52796f" },
        { label: "Blue", value: "#274c77" },
        { label: "Orange", value: "#e76f51" },
        { label: "Purple", value: "#7019bc" },
      ],
    },
    {
      id: "radius",
      label: t("components.config.custom.general.radius"),
      value: "md",
      options: [
        { label: "Sm", value: "sm" },
        { label: "Md", value: "md" },
        { label: "Lg", value: "lg" },
      ],
    },
  ]);

  const handleStyles = (id: "color" | "radius" | "lang", value: string) => {
    setStyles((preStyles) =>
      preStyles.map((style) => (style.id === id ? { ...style, value } : style))
    );
  };

  useEffect(() => {
    setLanguage(styles[0].value);
    setColor(styles[1].value);
    setRadius(styles[2].value);
  }, [styles]);

  return (
    <div className="core-style">
      {styles.map((style, i) => (
        <div className="field" key={i}>
          <label>{style.label}</label>
          <div className="options">
            {style.options?.map((opt) =>
              style.id === "lang" ? (
                <button
                  onClick={() => handleStyles("lang", opt.value)}
                  className="icon"
                  key={opt.value}
                  data-active-opt={opt.value === style.value}>
                  {opt.label}
                </button>
              ) : style.id === "color" ? (
                <button
                  onClick={() => handleStyles("color", opt.value)}
                  className="color"
                  key={opt.value}
                  style={{ backgroundColor: opt.value }}
                  data-active-opt={opt.value === style.value}
                />
              ) : (
                <button
                  onClick={() => handleStyles("radius", opt.value)}
                  className="radius icon"
                  key={opt.value}
                  data-active-opt={opt.value === style.value}>
                  <div className={`border ${opt.value}`} />
                </button>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
