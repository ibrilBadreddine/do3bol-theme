import "./style.scss";
import { useState } from "react";
import Icon from "@components/shared/icons";
import CustomEditor from "./custom-editor";
import CustomOptions from "./custom-options";
import CustomReorder from "./custom-reorder";
import CustomStyle from "./custom-style";
import { useCustom } from "@/core/context";
import { useTranslation } from "react-i18next";

const Custom: React.FC<{ setStep: (step: number) => void }> = ({ setStep }) => {
  const { t } = useTranslation();
  const { isChanged, save } = useCustom();
  const [customize, setCustomize] = useState<"settings" | "reorder" | "style">(
    "settings"
  );

  const saveChanges = () => {
    save();
    setStep(0);
  };
  return (
    <div className="custom-area">
      {/* Head */}
      <div className="custom-head">
        <div className="headlines">
          <h4>{t("components.config.custom.head.title")}</h4>
          <p>{t("components.config.custom.head.subtitle")}</p>
        </div>
        <div className="tabs">
          <button
            onClick={() => setCustomize("settings")}
            className="settings-tab"
            data-active-tab={customize === "settings"}>
            <Icon name="settings" size={15} />
          </button>
          <button
            onClick={() => setCustomize("reorder")}
            className="reorder-tab"
            data-active-tab={customize === "reorder"}>
            <Icon name="queue_list" size={15} />
          </button>
          <button
            onClick={() => setCustomize("style")}
            className="settings-tab"
            data-active-tab={customize === "style"}>
            <Icon name="style" size={15} />
          </button>
        </div>
      </div>
      {/* Core */}
      <div className="custom-core">
        {customize === "settings" ? (
          <div className="core-items">
            <CustomOptions />
            <CustomEditor />
          </div>
        ) : customize === "reorder" ? (
          <CustomReorder />
        ) : (
          <CustomStyle />
        )}
      </div>
      {/* Footer */}
      <div className="custom-footer">
        <button onClick={() => setStep(1)} className="icon">
          {t("components.config.custom.actions.back")}
        </button>
        <button onClick={saveChanges} className="primary" disabled={!isChanged}>
          <Icon name="save" />
          {t("components.config.custom.actions.save")}
        </button>
      </div>
    </div>
  );
};

export default Custom;
