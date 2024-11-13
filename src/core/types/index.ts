import type {
  AvailableSections,
  SectionDefinition,
} from "./schema/section.type";
import { StyleDefinition } from "./schema/style.type";
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
  type: "sections" | "variants";
  styles: StyleDefinition[];
  sections: SectionDefinition[];
  variants: VariantsDefinition[];
  selected_item: SectionDefinition | VariantsDefinition;
}

export interface CustomContextType {
  theme: ThemeDefinition;
  baseTheme: ThemeDefinition;
  isChanged: boolean;
  save: () => void;
  setSelectedItem: (item_id: AvailableSections | AvailableVariants) => void;
  setSetting: (setting_id: string, setting_value: boolean | string) => void;
  setStyle: (style_id: string, style_value: string) => void;
  setVisibility: (is_visible: boolean) => void;
  setOrder: (
    item_id: AvailableSections | AvailableVariants,
    new_index: number
  ) => void;
  getSettingValue: (
    item_id: AvailableSections | AvailableVariants,
    setting_id: string
  ) => string | boolean | undefined;
}
