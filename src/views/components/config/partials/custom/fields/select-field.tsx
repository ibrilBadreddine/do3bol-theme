import { useCustom } from "@/core/context";
import Icon from "@/views/components/shared/icons";
import type { SelectSetting } from "@/core/types/schema/section.type";
import { useTranslation } from "react-i18next";

const SelectField: React.FC<SelectSetting<string>> = (setting) => {
  const { t } = useTranslation();
  const { setSetting } = useCustom();

  return (
    <div className="field field-select" key={setting.id}>
      <label>{t(`components.config.custom.settings.${setting.id}`)}</label>
      <div className="select-tabs">
        {setting.options.map((opt) => (
          <button
            key={opt.value}
            className="icon"
            data-active={setting.value === opt.value}
            onClick={() => setSetting(setting.id, opt.value)}>
            {opt.icon && <Icon name={opt.icon} />}
            {t(`components.config.custom.settings.options.${opt.value}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectField;
