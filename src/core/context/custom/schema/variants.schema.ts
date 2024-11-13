import type { VariantsDefinition } from "@/core/types/schema/variant.type";

const VARIANTS_SCHEMA: VariantsDefinition[] = [
  {
    id: "color",
    description: "Options for selecting product colors",
    is_visible: true,
    type: "variants",
  },
  {
    id: "badge",
    description: "Selectable badges for product options",
    is_visible: true,
    type: "variants",
  },
  {
    id: "countdown",
    description: "Timer to create urgency for limited offers",
    is_visible: true,
    type: "variants",
  },
  {
    id: "form",
    description: "Quick buy form for faster checkout",
    is_visible: true,
    type: "variants",
  },
  {
    id: "radio",
    description: "Single-choice selection buttons",
    is_visible: false,
    type: "variants",
  },
  {
    id: "dropdown",
    description: "Expandable list for selecting options",
    is_visible: false,
    type: "variants",
  },
];

export default VARIANTS_SCHEMA;
