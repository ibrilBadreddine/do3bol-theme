export interface SectionDefinition {
  id: AvailableSections;
  is_visible: boolean;
  settings: Setting[];
}

// Base settings
interface BaseSetting {
  id: string;
  label: string;
  type: string;
}

// Setting types
export type Setting =
  | RadioSetting<boolean>
  | SliderSetting
  | SelectSetting<string>
  | InputSetting<string>;

// Specific Setting Types
interface RadioSetting<T> extends BaseSetting {
  type: "radio";
  value: T;
}

interface SliderSetting extends BaseSetting {
  type: "slider";
  value: Dimension;
}

interface SelectSetting<T> extends BaseSetting {
  type: "select";
  options: Option<T>[];
  value: T;
}

interface InputSetting<T> extends BaseSetting {
  type: "input";
  placeholder?: string;
  value: T;
}

// Common types
export type AvailableSections =
  | "box"
  | "slider"
  | "content"
  | "collections"
  | "product-list"
  | "product-reviews";

type CSSUnit = "px" | "%" | "em" | "rem" | "vh" | "vw";
type Dimension = `${number}${CSSUnit}`;
interface Option<T> {
  label: string;
  value: T;
}
