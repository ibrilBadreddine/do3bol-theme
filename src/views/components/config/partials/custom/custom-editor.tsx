import { useCustom } from "@/core/context";
import SwitchField from "./fields/switch-field";
import SelectField from "./fields/select-field";
import Empty from "@/views/components/shared/empty";
import Icon from "@/views/components/shared/icons";
import { useTranslation } from "react-i18next";

export default function CustomEditor() {
  const { t } = useTranslation();
  const { theme, setVisibility } = useCustom();
  const itemType = window.location.pathname.includes("product")
    ? "variant"
    : "section";

  const currentItem = theme[`${itemType}s`].find(
    (item) => item.id === theme.selected_item
  );

  const handleVisibility = () =>
    setVisibility(itemType, theme.selected_item, !currentItem?.is_visible);
  return (
    <div className="editor">
      {/* Head */}
      <div className="editor-head">
        <div className="headlines">
          <h4>
            {t(
              `components.config.custom.${itemType}s.${theme.selected_item}.title`
            )}
          </h4>
          <p>
            {t(
              `components.config.custom.${itemType}s.${theme.selected_item}.subtitle`
            )}
          </p>
        </div>
        <button onClick={handleVisibility} className="visibility-btn icon">
          <Icon
            name={currentItem?.is_visible ? "eye" : "eye_slash"}
            size={15}
          />
        </button>
      </div>
      {/* Settings */}
      <div className="editor-form">
        {currentItem?.settings &&
          currentItem?.settings.map((setting) => {
            switch (setting.type) {
              case "switch":
                return <SwitchField {...setting} key={setting.id} />;
              case "select":
                return <SelectField {...setting} key={setting.id} />;
              default:
                return (
                  <div className="empty-editor">
                    <Empty
                      icon="puzzle"
                      title="Oops!"
                      subtitle="No settings here."
                    />
                  </div>
                );
            }
          })}
      </div>
    </div>
  );
}
