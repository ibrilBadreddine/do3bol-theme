export interface ToastDefinition {
  variant: ToastVariants;
  title?: string;
  message?: string;
  show: boolean;
  close: (state: boolean) => void;
}

type ToastVariants =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "promise";
