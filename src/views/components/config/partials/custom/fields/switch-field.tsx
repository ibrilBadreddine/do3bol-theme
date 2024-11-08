import { useCustom } from "@/core/context";
import type { SwitchSetting } from "@/core/types/schema/section.type";

const SwitchField: React.FC<SwitchSetting<boolean>> = (setting) => {
  const { theme, setSetting } = useCustom();

  const currentSection = theme.sections.find(
    (sec) => sec.id === theme.selected_item
  );
  return (
    currentSection && (
      <div className="field switch-field" key={setting.id}>
        <label className="switch">
          {setting.label}
          <input
            type="checkbox"
            name={setting.id}
            checked={setting.value}
            onChange={() =>
              setSetting(currentSection, setting.id, !setting.value)
            }
          />
        </label>
      </div>
    )
  );
};

export default SwitchField;
