import "./dialog.style.scss";
import Icon from "@components/shared/icons";
import ModalFull from "@components/shared/modal/full";
import ModalSticky from "@components/shared/modal/sticky";
import type { DialogDefinition } from "./dialog.type";
import { useTranslation } from "react-i18next";

export const Dialog = ({ isOpen, setModal }: DialogDefinition) => {
  const { t } = useTranslation();

  const DialogCore = () => {
    return (
      <div className="dialog-core">
        <div className="dialog-icon">
          <Icon name="warning" size={30} />
        </div>
        <div className="dialog-content">
          <h4>{t("components.dialog.title")}</h4>
          <p>{t("components.dialog.subtitle")}</p>
        </div>
        <div className="dialog-actions">
          <button className="icon" onClick={() => setModal(false)}>
            {t("components.dialog.actions.cancel")}
          </button>
          <button className="destructive">
            {t("components.dialog.actions.delete")}
          </button>
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
