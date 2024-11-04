import "./dialog.style.scss";
import Icon from "@components/shared/icons";
import ModalFull from "@components/shared/modal/full";
import ModalSticky from "@components/shared/modal/sticky";
import type { DialogDefinition } from "./dialog.type";

export const Dialog = ({ isOpen, setModal }: DialogDefinition) => {
  const DialogCore = () => {
    return (
      <div className="dialog-core">
        <div className="dialog-icon">
          <Icon name="warning" size={30} />
        </div>
        <div className="dialog-content">
          <h4>Your're about to delete item</h4>
          <p>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </div>
        <div className="dialog-actions">
          <button className="icon" onClick={() => setModal(false)}>
            No, keep it
          </button>
          <button className="destructive">Yes, delete</button>
        </div>
      </div>
    );
  };

  return (
    <div className="dialog-container">
      <ModalFull isOpen={isOpen} setModal={setModal}>
        <DialogCore />
      </ModalFull>
      <ModalSticky isOpen={isOpen} setModal={setModal}>
        <DialogCore />
      </ModalSticky>
    </div>
  );
};

export default Dialog;
