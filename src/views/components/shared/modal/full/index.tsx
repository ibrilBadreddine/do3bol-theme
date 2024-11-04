import "../modal.style.scss";
import Icon from "@components/shared/icons";
import type { ModalFullDefinition } from "../modal.type";

export const ModalFull = ({
  children,
  title,
  subtitle,
  isOpen,
  width = "400px",
  setModal,
}: ModalFullDefinition) => {
  return (
    <div className="modal-container modal-full" data-hidden={!isOpen}>
      <div className="modal-box" style={{ width: width }}>
        {title && (
          <div className="modal-head">
            <div className="headlines">
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
            <button onClick={() => setModal(false)} className="icon">
              <Icon name="close" />
            </button>
          </div>
        )}
        <div className="modal-core">{children}</div>
      </div>
      <div
        onClick={() => setModal(false)}
        className={`overlay ${isOpen ? "overlay-full" : ""}`}
      />
    </div>
  );
};

export default ModalFull;
