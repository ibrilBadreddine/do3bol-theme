import "./style.scss";
import { useState } from "react";
import Icon from "@components/shared/icons";
import CustomEditor from "./custom-editor";
import CustomOptions from "./custom-options";
import CustomReorder from "./custom-reorder";

export default function Custom() {
  const [isSettings, setState] = useState<boolean>(false);

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
            onClick={() => setState(true)}
            className="settings-tab"
            data-active-tab={isSettings}>
            <Icon name="settings" size={15} />
          </button>
          <button
            onClick={() => setState(false)}
            className="reorder-tab"
            data-active-tab={!isSettings}>
            <Icon name="queue_list" size={15} />
          </button>
        </div>
      </div>
      {/* Core */}
      <div className="custom-core">
        {isSettings ? (
          <div className="core-items">
            <CustomOptions />
            <CustomEditor />
          </div>
        ) : (
          <CustomReorder />
        )}
      </div>
      {/* Footer */}
      <div className="custom-footer">
        <button className="icon">Back</button>
        <button className="primary">
          <Icon name="save" />
          Save
        </button>
      </div>
    </div>
  );
}
