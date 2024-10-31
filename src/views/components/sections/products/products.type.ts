export interface ProductDefinition {
  title?: string;
  subtitle?: string;
  columns?: number;
  gap?: number;
  length?: number;
  style?: ProductStyles;
}

type ProductStyles = "default" | "with-button";
