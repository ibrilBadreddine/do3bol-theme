import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";
import SECTIONS_SCHEMA from "./schema/sections.schema";
import VARIANTS_SCHEMA from "./schema/variants.schema";
import STYLES_SCHEMA from "./schema/style.schema";
import type { CustomContextType, ThemeDefinition } from "@/core/types";
import type { AvailableSections } from "@/core/types/schema/section.type";
import type { AvailableVariants } from "@/core/types/schema/variant.type";

const CustomContext = createContext<CustomContextType | undefined>(undefined);

export const CustomizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { i18n } = useTranslation();
  const baseType = window.location.pathname.includes("product")
    ? "variants"
    : "sections";

  const [baseTheme, setBaseTheme] = useState<ThemeDefinition>({
    styles: STYLES_SCHEMA,
    sections: SECTIONS_SCHEMA,
    variants: VARIANTS_SCHEMA,
    type: baseType,
    selected_item:
      baseType === "variants" ? VARIANTS_SCHEMA[0] : SECTIONS_SCHEMA[0],
  });
  const [theme, setTheme] = useState<ThemeDefinition>(baseTheme);
  const baseComponents = [...theme.sections, ...theme.variants];

  // TODO: ...
  const isChanged = !(JSON.stringify(baseTheme) === JSON.stringify(theme));

  const setSelectedItem = (item_id: AvailableSections | AvailableVariants) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      selected_item:
        baseComponents.find((sec) => sec.id === item_id) ??
        prevTheme.selected_item,
    }));
  };

  const setVisibility = useCallback((is_visible: boolean) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      [baseType]: prevTheme[baseType].map((item) =>
        item.id === prevTheme.selected_item.id ? { ...item, is_visible } : item
      ),
    }));
  }, []);

  const getSettingValue = (
    item_id: AvailableSections | AvailableVariants,
    setting_id: string
  ) => {
    return baseTheme.sections
      .find((item) => item.id === item_id)
      ?.settings.find((setting) => setting.id === setting_id)?.value;
  };

  const setSetting = useCallback(
    (setting_id: string, setting_value: boolean | string) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        sections: prevTheme.sections.map((sec) =>
          sec.id === prevTheme.selected_item.id
            ? {
                ...sec,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                settings: sec.settings.map((set: any) =>
                  set.id === setting_id ? { ...set, value: setting_value } : set
                ),
              }
            : sec
        ),
      }));
    },
    []
  );

  const setOrder = useCallback(
    (item_id: AvailableSections | AvailableVariants, new_index: number) => {
      setTheme((prevTheme) => {
        const item = prevTheme[baseType].find((s) => s.id === item_id);
        if (!item) {
          console.error(`${baseType.toUpperCase()} "${item_id}" not found!`);
          return prevTheme;
        }

        const updatedItem = [...prevTheme[baseType]];
        const fromIndex = updatedItem.indexOf(item);
        updatedItem.splice(fromIndex, 1);
        updatedItem.splice(new_index, 0, item);

        return { ...prevTheme, [baseType]: updatedItem };
      });
    },
    []
  );

  const setStyle = useCallback((style_id: string, style_value: string) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      styles: prevTheme.styles.map((style) =>
        style.id === style_id
          ? {
              ...style,
              settings: [{ ...style.settings[0], value: style_value }],
            }
          : style
      ),
    }));
  }, []);

  const setLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    const core = document.documentElement;
    core.setAttribute("lang", lang);
    core.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  const setColor = (color: string) => {
    const core = document.documentElement;
    core.style.setProperty("--base-black", color);
  };

  const setRadius = (radius: "sm" | "md" | "lg") => {
    const values = {
      sm: { sm: "2px", md: "4px", lg: "6px", xl: "8px", "2xl": "12px" },
      md: { sm: "0.5em", md: "0.7em", lg: "1em", xl: "1.5em", "2xl": "2em" },
      lg: { sm: "1em", md: "2em", lg: "3em", xl: "4em", "2xl": "6em" },
    };

    const core = document.documentElement;
    Object.entries(values[radius]).forEach(([key, val]) => {
      core.style.setProperty(`--radius-${key}`, val);
    });
  };

  // TODO: Error handler still needed (type checking)
  const save = () => {
    if (isChanged) {
      setBaseTheme(theme);
      theme.styles.forEach((style) => {
        const setting = style.settings[0];

        switch (setting.label) {
          case "lang":
            setLanguage(setting.value);
            break;
          case "colors":
            setColor(setting.value);
            break;
          case "radius":
            setRadius(setting.value);
            break;
          default:
            console.warn(`Unhandled setting id: ${setting.id}`);
        }
      });
    }
  };

  useEffect(() => {
    i18n.changeLanguage("en");

    console.log(
      "%cDo3bol Theme 🍲",
      "color: white; background-color: #121212; font-size: 30px; padding: 12px 25px; border-radius: .5em;"
    );
  }, []);

  useEffect(() => {
    setSelectedItem(theme.selected_item.id);
  }, [theme.sections, theme.variants]);

  return (
    <CustomContext.Provider
      value={{
        save,
        theme,
        isChanged,
        baseTheme,
        setOrder,
        setStyle,
        setSetting,
        setVisibility,
        getSettingValue,
        setSelectedItem,
      }}>
      {children}
    </CustomContext.Provider>
  );
};

export default CustomContext;
