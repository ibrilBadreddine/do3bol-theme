import { useCustom } from "@/core/context";
import Icon from "@/views/components/shared/icons";

export default function CustomOptions() {
  const { theme, setItem } = useCustom();
  const itemType = window.location.pathname.includes("product")
    ? "variants"
    : "sections";

  // TODO: TO remove...
  const sectionStyle = {
    slider: 2,
    box: 4,
    content: 1,
    collections: 3,
    "product-list": 3,
    "product-reviews": 2,
    color: 1,
    badge: 1,
    countdown: 3,
    form: 1,
    radio: 1,
    dropdown: 3,
  };
  const formatNaming = (section_id: string) =>
    section_id
      .replace("product-", section_id === "product-list" ? "Products" : " ")
      .replace("list", "");
  return (
    <div className="sections">
      {theme[itemType].map((section) => (
        <div key={section.id} className="section-box">
          <button
            className={`box-shape icon ${section.id}`}
            data-selected={section.id === theme.selected_item}
            onClick={() => setItem(section.id)}>
            {[...Array(sectionStyle[section.id])].map((_, i) => (
              <div key={i} className="shape" />
            ))}
            <Icon className="box-check" name="check_circle_solid" size={25} />
          </button>
          <p className="box-name">{formatNaming(section.id)}</p>
        </div>
      ))}
    </div>
  );
}
