export interface StyleDefinition {
  id: AvailableStyles;
  settings: Setting[];
  type: "styles";
}

interface BaseSetting {
  id: string;
  label: string;
  type: string;
}

export type Setting = SelectSetting<string>;

export interface SwitchSetting<T> extends BaseSetting {
  type: "switch";
  value: T;
}

export interface SelectSetting<T> extends BaseSetting {
  type: "select";
  options: Option<T>[];
  value: T;
}

export type AvailableStyles = "language" | "colors" | "radius";

interface Option<T> {
  label: string;
  value: T;
}
