import { useCustom } from "@/core/context";
import Icon from "@components/shared/icons";

export default function CustomReorder() {
  const { theme } = useCustom();

  const itemType = window.location.pathname.includes("product")
    ? "variants"
    : "sections";

  const formatNaming = (item_id: string) =>
    item_id
      .replace("product-", item_id === "product-list" ? "Products" : " ")
      .replace("list", "");
  return (
    <div className="core-reorder">
      <div className="reorder-items">
        {theme[itemType].map((item, i) => (
          <button className="item-box icon" key={i}>
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
            {theme[itemType].map((item, i) => (
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
