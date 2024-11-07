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
import type { CustomContextType, ThemeDefinition } from "@/core/types";
import type {
  AvailableSections,
  Setting,
} from "@/core/types/schema/section.type";
import type { AvailableVariants } from "@/core/types/schema/variant.type";

const CustomContext = createContext<CustomContextType | undefined>(undefined);

export const CustomizationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState<ThemeDefinition>({
    sections: SECTIONS_SCHEMA,
    variants: VARIANTS_SCHEMA,
  });

  /**
   *
   * @param section_id
   * @param is_visible
   */
  const setVisibility = useCallback(
    <T extends "section" | "variant">(
      type: T,
      item_id: T extends "section" ? AvailableSections : AvailableVariants,
      is_visible: boolean
    ) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        [`${type}s`]: prevTheme[`${type}s`].map((item) =>
          item.id === item_id ? { ...item, is_visible } : item
        ),
      }));
    },
    []
  );

  /**
   *
   * @param section_id
   * @param new_index
   */
  const setOrder = useCallback(
    <T extends "section" | "variant">(
      type: T,
      item_id: T extends "section" ? AvailableSections : AvailableVariants,
      new_index: number
    ) => {
      setTheme((prevTheme) => {
        const item = prevTheme[`${type}s`].find((s) => s.id === item_id);
        if (!item) {
          console.error(`${type.toUpperCase()} "${item_id}" not found!`);
          return prevTheme;
        }

        const updatedItem = [...prevTheme[`${type}s`]];
        const fromIndex = updatedItem.indexOf(item);
        updatedItem.splice(fromIndex, 1);
        updatedItem.splice(new_index, 0, item);

        return { ...prevTheme, [`${type}s`]: updatedItem };
      });
    },
    []
  );

  /**
   *
   * @param section_id
   * @param new_settings
   */
  const setSettings = useCallback(
    (section_id: AvailableSections, new_settings: Setting[]) => {
      setTheme((prevTheme) => ({
        ...prevTheme,
        sections: prevTheme.sections.map((s) =>
          s.id === section_id ? { ...s, settings: new_settings } : s
        ),
      }));
    },
    []
  );

  /**
   *
   * @param lang
   */
  const setLanguage = (lang: "en" | "ar") => {
    i18n.changeLanguage(lang);
    const core = document.documentElement;
    core.setAttribute("lang", lang);
    core.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  // TODO: setColor function()

  useEffect(() => {
    console.log("Theme updated:", theme);
  }, [theme]);

  return (
    <CustomContext.Provider
      value={{ theme, setLanguage, setOrder, setSettings, setVisibility }}>
      {children}
    </CustomContext.Provider>
  );
};

export default CustomContext;
