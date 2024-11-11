import type {
  AvailableSections,
  SectionDefinition,
} from "./schema/section.type";
import type {
  AvailableVariants,
  VariantsDefinition,
} from "./schema/variant.type";

export interface CollectionDefinition {
  id: string;
  name?: string;
}

export interface ProductDefinition {
  id: string;
  title?: string;
  img: string;
  price: { before?: number; after: number };
  collection_id: string;
}

// CONTEXT
export interface ThemeDefinition {
  sections: SectionDefinition[];
  variants: VariantsDefinition[];
  selected_item: AvailableSections | AvailableVariants;
}

export interface CustomContextType {
  theme: ThemeDefinition;
  setLanguage: (lang: "en" | "ar") => void;
  setColor: (color: string) => void;
  setRadius: (radius: string) => void;
  setItem: (item_id: AvailableSections | AvailableVariants) => void;
  setSetting: (
    section: SectionDefinition,
    setting_id: string,
    setting_value: boolean | string
  ) => void;
  setOrder: <T extends "section" | "variant">(
    type: T,
    item_id: T extends "section" ? AvailableSections : AvailableVariants,
    new_index: number
  ) => void;
  setVisibility: <T extends "section" | "variant">(
    type: T,
    item_id: T extends "section" ? AvailableSections : AvailableVariants,
    is_visible: boolean
  ) => void;
}
