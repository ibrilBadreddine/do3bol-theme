import type {
  AvailableSections,
  SectionDefinition,
  Setting,
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
}

export interface CustomContextType {
  theme: ThemeDefinition;
  setLanguage: (lang: "en" | "ar") => void;
  setSettings: (section_id: AvailableSections, new_settings: Setting[]) => void;
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
