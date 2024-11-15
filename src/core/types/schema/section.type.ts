export interface SectionDefinition {
  id: AvailableSections;
  description: string;
  is_visible: boolean;
  settings: Setting[];
  type: "sections"
}

interface BaseSetting {
  id: string;
  label: string;
  type: string;
}

export type Setting = SwitchSetting<boolean> | SelectSetting<string>;

export interface SwitchSetting<T> extends BaseSetting {
  type: "switch";
  value: T;
}

export interface SelectSetting<T> extends BaseSetting {
  type: "select";
  options: Option<T>[];
  value: T;
}

export type AvailableSections =
  | "box"
  | "slider"
  | "content"
  | "collections"
  | "product-list"
  | "product-reviews";

interface Option<T> {
  label: string;
  value: T;
  icon?: "fit" | "full";
}
