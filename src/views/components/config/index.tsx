import "./config.style.scss";
import { useState } from "react";
import Welcome from "./partials/welcome";
import Custom from "./partials/custom";
import Action from "./partials/action";
import Flow from "./partials/flow";

export default function ConfigPanel() {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="config-container">
      <div className="config-box" data-step={step}>
        {step === 0 ? (
          <Action setStep={setStep} />
        ) : step === 1 ? (
          <Welcome setStep={setStep} />
        ) : step === 2 || step === 3 ? (
          <Flow currentStep={step} setStep={setStep} />
        ) : (
          <Custom setStep={setStep} />
        )}
      </div>
      {step > 0 && <div className="overlay" onClick={() => setStep(0)} />}
    </div>
  );
}
