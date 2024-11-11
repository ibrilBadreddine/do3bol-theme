import "./style.scss";
import FlowOptions from "./flow-options";
import FlowTimeline from "./flow-timeline";
import Icon from "@/views/components/shared/icons";

const Flow: React.FC<{
  currentStep: number;
  setStep: (step: number) => void;
}> = ({ currentStep, setStep }) => {
  return (
    <div className="flow-area">
      {currentStep === 2 ? <FlowOptions /> : <FlowTimeline />}
      <div className="flow-actions">
        <button onClick={() => setStep(currentStep - 1)} className="icon">
          Back
        </button>
        <button
          onClick={() => setStep(3)}
          disabled={currentStep === 3}
          className="primary">
          Next
          <Icon name="chevron_right" />
        </button>
      </div>
    </div>
  );
};

export default Flow;
