import "./style.scss";
import FlowOptions from "./flow-options";
import FlowTimeline from "./flow-timeline";
import Icon from "@/views/components/shared/icons";
import { useTranslation } from "react-i18next";

const Flow: React.FC<{
  currentStep: number;
  setStep: (step: number) => void;
}> = ({ currentStep, setStep }) => {
  const { t } = useTranslation();

  return (
    <div className="flow-area">
      {currentStep === 2 ? <FlowOptions /> : <FlowTimeline />}
      <div className="flow-actions">
        <button onClick={() => setStep(currentStep - 1)} className="icon">
          {t("components.config.flow.actions.back")}
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={currentStep === 3}
          className="primary">
          {t("components.config.flow.actions.next")}
          <Icon name="chevron_right" />
        </button>
      </div>
    </div>
  );
};

export default Flow;
