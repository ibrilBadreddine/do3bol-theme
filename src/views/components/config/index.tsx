import "./config.style.scss";
import { useState } from "react";
import Welcome from "./partials/welcome";
import Custom from "./partials/custom";

export default function ConfigPanel() {
  const [step, setStep] = useState<number>(0);

  return (
    <div className="config-container">
      <div className="config-box" data-step={step}>
        {step === 0 ? <Welcome /> : <Custom />}
      </div>
      <div className="overlay" onClick={() => setStep(step + 1)} />
    </div>
  );
}
