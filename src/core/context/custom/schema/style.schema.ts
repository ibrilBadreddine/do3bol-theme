import type { StyleDefinition } from "@/core/types/schema/style.type";

const STYLES_SCHEMA: StyleDefinition[] = [
  {
    id: "language",
    settings: [
      {
        id: "style",
        label: "lang",
        type: "select",
        options: [
          { label: "English", value: "en" },
          { label: "Arabic", value: "ar" },
        ],
        value: "en",
      },
    ],
    type: "styles",
  },
  {
    id: "colors",
    settings: [
      {
        id: "style",
        label: "colors",
        type: "select",
        options: [
          { label: "Black", value: "#121212" },
          { label: "Green", value: "#52796f" },
          { label: "Blue", value: "#274c77" },
          { label: "Orange", value: "#e76f51" },
          { label: "Purple", value: "#7019bc" },
        ],
        value: "#121212",
      },
    ],
    type: "styles",
  },
  {
    id: "radius",
    settings: [
      {
        id: "style",
        label: "radius",
        type: "select",
        options: [
          { label: "Sm", value: "sm" },
          { label: "Md", value: "md" },
          { label: "Lg", value: "lg" },
        ],
        value: "md",
      },
    ],
    type: "styles",
  },
];

export default STYLES_SCHEMA;
