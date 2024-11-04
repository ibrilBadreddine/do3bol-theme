import "../modal.style.scss";
import type { ModalFullDefinition } from "../modal.type";

export const ModalFull = ({
  children,
  isOpen,
  setModal,
}: ModalFullDefinition) => {
  return (
    <div className="modal-container modal-full" data-hidden={!isOpen}>
      <div className="modal-box">{children}</div>
      <div
        onClick={() => setModal(false)}
        className={`overlay ${isOpen ? "overlay-full" : ""}`}
      />
    </div>
  );
};

export default ModalFull;
