import "./style.scss";
import Icon from "@components/shared/icons";

const Action: React.FC<{ setStep: (step: number) => void }> = ({ setStep }) => {
  return (
    <button onClick={() => setStep(1)} className="action-area">
      <Icon name="settings" />
    </button>
  );
};

export default Action;
