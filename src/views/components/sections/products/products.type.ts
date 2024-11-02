export interface ListDefinition {
  title?: string;
  subtitle?: string;
  columns?: number;
  gap?: number;
  length?: number;
  style?: ProductStyles;
}

type ProductStyles = "default" | "with-button";

export interface ReviewDefinition {
  title?: string;
  subtitle?: string;
  columns?: number;
  gap?: number;
}
