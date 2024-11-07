export interface VariantsDefinition {
  id: AvailableVariants;
  is_visible: boolean;
}

export type AvailableVariants =
  | "color"
  | "badge"
  | "countdown"
  | "form"
  | "radio"
  | "dropdown";
