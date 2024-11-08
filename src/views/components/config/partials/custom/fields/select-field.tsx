import { useCustom } from "@/core/context";
import Icon from "@/views/components/shared/icons";
import type { SelectSetting } from "@/core/types/schema/section.type";

const SelectField: React.FC<SelectSetting<string>> = (setting) => {
  const { theme, setSetting } = useCustom();

  const currentSection = theme.sections.find(
    (sec) => sec.id === theme.selected_item
  );
  return (
    currentSection && (
      <div className="field field-select" key={setting.id}>
        <label>{setting.label}</label>
        <div className="select-tabs">
          {setting.options.map((opt) => (
            <button
              key={opt.value}
              className="icon"
              data-active={setting.value === opt.value}
              onClick={() => setSetting(currentSection, setting.id, opt.value)}>
              {opt.icon && <Icon name={opt.icon} />}
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    )
  );
};

export default SelectField;
