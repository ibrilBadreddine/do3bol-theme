import { useState } from "react";
import Icon from "@components/shared/icons";

export default function FlowOptions() {
  const [selectedFlow, setFlow] = useState<1 | 2>(1);

  return (
    <div className="flow-options">
      {/* Head */}
      <div className="options-head">
        <div className="headlines">
          <h4>Choose flow</h4>
          <p>Select a flow to start you exploring journey</p>
        </div>
      </div>
      {/* Core */}
      <div className="options-core">
        <div className="opts">
          <button
            onClick={() => setFlow(1)}
            className="opt icon"
            data-active-flow={selectedFlow === 1}>
            <Icon name="bolt" size={20} />
            <div className="opt-info">
              <span>Skip cart</span>
              <p>Go straight to checkout for a quicker purchase.</p>
            </div>
          </button>
          <button
            onClick={() => setFlow(2)}
            className="opt icon"
            data-active-flow={selectedFlow === 2}>
            <Icon name="cart" size={20} />
            <div className="opt-info">
              <span>With cart</span>
              <p>Shop with a full cart experience before checkout.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
