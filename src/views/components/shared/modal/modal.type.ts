export interface ModalStickyDefinition {
  isOpen: boolean;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  setModal: (state: boolean) => void;
}
