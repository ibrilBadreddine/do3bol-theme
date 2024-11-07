import type { SectionDefinition } from "@/core/types/schema/section.type";

const SECTIONS_SCHEMA: SectionDefinition[] = [
  {
    id: "slider",
    is_visible: true,
    settings: [
      { id: "auto_move", label: "Auto move:", type: "radio", value: false },
      { id: "height", label: "Height:", type: "slider", value: "80vh" },
      {
        id: "show_content",
        label: "Show content:",
        type: "radio",
        value: false,
      },
      {
        id: "style",
        label: "Choose style:",
        type: "select",
        options: [
          { label: "Fit", value: "fit" },
          { label: "Full", value: "full" },
        ],
        value: "fit",
      },
    ],
  },
  {
    id: "box",
    is_visible: true,
    settings: [
      {
        id: "headlines",
        label: "Show headlines",
        type: "radio",
        value: false,
      },
    ],
  },
  {
    id: "content",
    is_visible: true,
    settings: [
      {
        id: "text",
        label: "Content:",
        type: "input",
        placeholder: "Type content...",
        value: "",
      },
    ],
  },
  {
    id: "collections",
    is_visible: true,
    settings: [
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
      {
        id: "headlines",
        label: "Show headline:",
        type: "radio",
        value: false,
      },
    ],
  },
  {
    id: "product-list",
    is_visible: true,
    settings: [
      {
        id: "style",
        label: "Choose style:",
        type: "select",
        options: [
          { label: "value", value: "value" },
          { label: "With button", value: "with-button" },
        ],
        value: "value",
      },
      {
        id: "headlines",
        label: "Show headline:",
        type: "radio",
        value: false,
      },
    ],
  },
  {
    id: "product-reviews",
    is_visible: true,
    settings: [
      {
        id: "headlines",
        label: "Show headline:",
        type: "radio",
        value: false,
      },
    ],
  },
];

export default SECTIONS_SCHEMA;
