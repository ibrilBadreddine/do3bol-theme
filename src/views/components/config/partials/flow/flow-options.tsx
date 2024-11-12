import { useState } from "react";
import Icon from "@components/shared/icons";
import { useTranslation } from "react-i18next";

export default function FlowOptions() {
  const { t } = useTranslation();
  const [selectedFlow, setFlow] = useState<1 | 2>(1);

  return (
    <div className="flow-options">
      {/* Head */}
      <div className="options-head">
        <div className="headlines">
          <h4>{t("components.config.flow.head.title")}</h4>
          <p>{t("components.config.flow.head.subtitle")}</p>
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
              <span>{t("components.config.flow.options.skip_cart.title")}</span>
              <p>{t("components.config.flow.options.skip_cart.subtitle")}</p>
            </div>
          </button>
          <button
            onClick={() => setFlow(2)}
            className="opt icon"
            data-active-flow={selectedFlow === 2}>
            <Icon name="cart" size={20} />
            <div className="opt-info">
              <span>{t("components.config.flow.options.with_cart.title")}</span>
              <p>{t("components.config.flow.options.with_cart.subtitle")}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
