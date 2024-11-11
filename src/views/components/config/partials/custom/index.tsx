import "./style.scss";
import { useState } from "react";
import Icon from "@components/shared/icons";
import CustomEditor from "./custom-editor";
import CustomOptions from "./custom-options";
import CustomReorder from "./custom-reorder";
import CustomStyle from "./custom-style";
import { useCustom } from "@/core/context";

const Custom: React.FC<{ setStep: (step: number) => void }> = ({ setStep }) => {
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
          <h4>Customize Theme</h4>
          <p>Make this theme uniquely yours</p>
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
          Back
        </button>
        <button onClick={saveChanges} className="primary" disabled={!isChanged}>
          <Icon name="save" />
          Save
        </button>
      </div>
    </div>
  );
};

export default Custom;
