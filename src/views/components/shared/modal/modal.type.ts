export interface ModalStickyDefinition {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  setModal: (state: boolean) => void;
}

export interface ModalFullDefinition {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  width?: Dimension;
  children: React.ReactNode;
  setModal: (state: boolean) => void;
}

type CSSUnit = "px" | "%" | "em" | "rem" | "vh" | "vw";
type Dimension = `${number}${CSSUnit}`;
