import { useRef, useState } from "react";
import { useCustom } from "@/core/context";
import Icon from "@components/shared/icons";

export default function CustomReorder() {
  const { theme, setOrder } = useCustom();
  const itemType = window.location.pathname.includes("product")
    ? "variant"
    : "section";

  const formatNaming = (item_id: string) =>
    item_id
      .replace("product-", item_id === "product-list" ? "Products" : " ")
      .replace("list", "");

  const dragFrom = useRef<number>(0);
  const dragTo = useRef<number>(0);
  return (
    <div className="core-reorder">
      <div className="reorder-items">
        {theme[`${itemType}s`].map((item, i) => (
          <button
            key={i}
            className="item-box icon"
            draggable
            onDragStart={() => (dragFrom.current = i)}
            onDragEnter={() => (dragTo.current = i)}
            onDragEnd={() => setOrder(itemType, item.id, dragTo.current)}
            onDragOver={(e) => e.preventDefault()}>
            {formatNaming(item.id)}
            <Icon name="bars" />
          </button>
        ))}
      </div>
      <div className="reorder-preview">
        <div className="preview-head">
          <div className="points">
            {[...Array(3)].map((_, i) => (
              <div className="point" key={i} />
            ))}
          </div>
          <div className="title">www.preview.com</div>
        </div>
        <div className="preview-core">
          <div className="shape-product" />
          <div className="shape-items">
            {theme[`${itemType}s`].map((item, i) => (
              <div className="preview-shape" key={i}>
                <span className="badge">{formatNaming(item.id)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
