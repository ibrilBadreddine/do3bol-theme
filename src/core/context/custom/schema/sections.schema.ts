import type { SectionDefinition } from "@/core/types/schema/section.type";

const SECTIONS_SCHEMA: SectionDefinition[] = [
  {
    id: "slider",
    description: "Carousel to display key visuals",
    is_visible: true,
    settings: [
      {
        id: "show_content",
        label: "Show content:",
        type: "switch",
        value: false,
      },
      {
        id: "style",
        label: "Choose style:",
        type: "select",
        options: [
          { label: "Fit", value: "fit", icon: "fit" },
          { label: "Full", value: "full", icon: "full" },
        ],
        value: "fit",
      },
    ],
    type: "sections"
  },
  {
    id: "box",
    description: "Highlight important info or links",
    is_visible: true,
    settings: [
      {
        id: "headlines",
        label: "Show headlines",
        type: "switch",
        value: true,
      },
    ],
    type: "sections"
  },
  {
    id: "content",
    description: "Rich text area for stories or updates",
    is_visible: true,
    settings: [],
    type: "sections"
  },
  {
    id: "collections",
    description: "Curated product group display",
    is_visible: true,
    settings: [
      {
        id: "headlines",
        label: "Show headline:",
        type: "switch",
        value: true,
      },
    ],
    type: "sections"
  },
  {
    id: "product-list",
    description: "Showcase a list of featured products",
    is_visible: true,
    settings: [
      {
        id: "headlines",
        label: "Show headline:",
        type: "switch",
        value: true,
      },
      {
        id: "style",
        label: "Choose style:",
        type: "select",
        options: [
          { label: "Default", value: "default" },
          { label: "With button", value: "with-button" },
        ],
        value: "default",
      },
      {
        id: "collection_id",
        label: "Choose collection",
        type: "select",
        options: [
          { label: "Man", value: "man" },
          { label: "Woman", value: "woman" },
          { label: "Kids", value: "kids" },
        ],
        value: "man",
      },
    ],
    type: "sections"
  },
  {
    id: "product-reviews",
    description: "Customer feedback highlights",
    is_visible: true,
    settings: [
      {
        id: "headlines",
        label: "Show headline:",
        type: "switch",
        value: true,
      },
    ],
    type: "sections"
  },
];

export default SECTIONS_SCHEMA;
