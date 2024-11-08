export interface VariantsDefinition {
  id: AvailableVariants;
  description: string;
  is_visible: boolean;
}

export type AvailableVariants =
  | "color"
  | "badge"
  | "countdown"
  | "form"
  | "radio"
  | "dropdown";
