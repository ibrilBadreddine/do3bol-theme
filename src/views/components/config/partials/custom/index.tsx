import "./style.scss";
import Icon from "@components/shared/icons";
import CustomEditor from "./custom-editor";
import CustomOptions from "./custom-options";

export default function Custom() {
  return (
    <div className="custom-area">
      {/* Head */}
      <div className="custom-head">
        <div className="headlines">
          <h4>Customize Theme</h4>
          <p>Make this theme uniquely yours</p>
        </div>
        <button className="reset-btn icon">
          <Icon name="spinner" />
        </button>
      </div>
      {/* Core */}
      <div className="custom-core">
        <div className="core-section">
          <CustomOptions />
          <CustomEditor />
        </div>
        <div className="core-variant"></div>
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
