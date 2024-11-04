export interface ToastDefinition {
  variant: ToastVariants;
  title?: string;
  message?: string;
}

type ToastVariants =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "promise";
