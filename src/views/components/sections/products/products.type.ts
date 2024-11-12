import type { ProductDefinition } from "@/core/types";

export interface ListDefinition {
  title?: string;
  subtitle?: string;
  columns?: number;
  gap?: number;
  products?: ProductDefinition[];
}

export interface ReviewDefinition {
  title?: string;
  subtitle?: string;
  columns?: number;
  gap?: number;
}
