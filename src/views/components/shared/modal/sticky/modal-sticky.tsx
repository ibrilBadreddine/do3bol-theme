import "../modal.style.scss";
import { useRef, useState } from "react";
import type { ModalStickyDefinition } from "../modal.type";

export const ModalSticky = ({
  children,
  title,
  subtitle,
  isOpen,
  setModal,
}: ModalStickyDefinition) => {
  const modalRef = useRef(null);
  const [{ isDragging, startY, translateY }, setDragState] = useState({
    isDragging: false,
    startY: 0,
    translateY: 0,
  });

  /**
   *
   * Drag Handler
   */
  const handleDragStart = (e: MouseEvent | TouchEvent) =>
    setDragState((prev) => ({
      ...prev,
      isDragging: true,
      startY: "touches" in e ? e.touches[0].pageY : e.pageY,
    }));

  const handleDragging = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const currentY = "touches" in e ? e.touches[0].pageY : e.pageY;
    const deltaY = currentY - startY;
    if (deltaY > 0) setDragState((prev) => ({ ...prev, translateY: deltaY }));
  };

  const handleDragStop = () => {
    if (!isDragging) return;
    setDragState((prev) => ({
      ...prev,
      isDragging: false,
      translateY: translateY > 100 ? (setModal(false), 0) : 0,
    }));
  };

  return (
    <div className="modal-container modal-sticky" data-hidden={!isOpen}>
      <div
        className="modal-box"
        style={{
          transform: `translateY(${translateY}px)`,
          transition: isDragging ? "none" : "all 0.4s ease",
        }}
        ref={modalRef}
        onTouchStart={(e) => handleDragStart(e as unknown as TouchEvent)}
        onTouchMove={(e) => handleDragging(e as unknown as TouchEvent)}
        onTouchEnd={handleDragStop}
        onMouseDown={(e) => handleDragStart(e as unknown as MouseEvent)}
        onMouseMove={(e) => handleDragging(e as unknown as MouseEvent)}
        onMouseUp={handleDragStop}>
        {title && (
          <div className="modal-head">
            <div className="headlines">
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
          </div>
        )}
        <div className="modal-core">
          <div className="core-box">{children}</div>
        </div>
      </div>
      <div
        onClick={() => setModal(false)}
        className={`overlay ${isOpen ? "overlay-full" : ""}`}
      />
    </div>
  );
};

export default ModalSticky;
