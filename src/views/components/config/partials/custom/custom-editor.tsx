import { useCustom } from "@/core/context";
import SwitchField from "./fields/switch-field";
import SelectField from "./fields/select-field";
import Empty from "@/views/components/shared/empty";
import Icon from "@/views/components/shared/icons";
import { useTranslation } from "react-i18next";

export default function CustomEditor() {
  const { t } = useTranslation();
  const { theme, setVisibility } = useCustom();
  const selectedItem = theme.selected_item;

  return (
    <div className="editor">
      {/* Head */}
      <div className="editor-head">
        <div className="headlines">
          <h4>
            {t(
              `components.config.custom.${theme.type}.${selectedItem.id}.title`
            )}
          </h4>
          <p>
            {t(
              `components.config.custom.${theme.type}.${selectedItem.id}.subtitle`
            )}
          </p>
        </div>
        <button
          onClick={() => setVisibility(!theme.selected_item?.is_visible)}
          className="visibility-btn icon">
          <Icon
            name={selectedItem.is_visible ? "eye" : "eye_slash"}
            size={15}
          />
        </button>
      </div>
      {/* Settings */}
      <div className="editor-form">
        {selectedItem.settings?.length ? (
          selectedItem.settings.map((setting) => {
            switch (setting.type) {
              case "switch":
                return <SwitchField {...setting} key={setting.id} />;
              case "select":
                return <SelectField {...setting} key={setting.id} />;
            }
          })
        ) : (
          <div className="empty-editor">
            <Empty
              icon="puzzle"
              title={t("components.config.custom.empty.title")}
              subtitle={t("components.config.custom.empty.subtitle")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
