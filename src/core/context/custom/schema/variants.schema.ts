import type { VariantsDefinition } from "@/core/types/schema/variant.type";

const VARIANTS_SCHEMA: VariantsDefinition[] = [
  {
    id: "color",
    description: "Options for selecting product colors",
    is_visible: true,
  },
  {
    id: "badge",
    description: "Selectable badges for product options",
    is_visible: true,
  },
  {
    id: "countdown",
    description: "Timer to create urgency for limited offers",
    is_visible: true,
  },
  {
    id: "form",
    description: "Quick buy form for faster checkout",
    is_visible: true,
  },
  {
    id: "radio",
    description: "Single-choice selection buttons",
    is_visible: false,
  },
  {
    id: "dropdown",
    description: "Expandable list for selecting options",
    is_visible: false,
  },
];

export default VARIANTS_SCHEMA;
