import "./style.scss";
import Step1 from "@/assets/images/step-1.png";
import Step2 from "@/assets/images/step-2.png";
import { useTranslation } from "react-i18next";

const Welcome: React.FC<{ setStep: (step: number) => void }> = ({
  setStep,
}) => {
  const { t } = useTranslation();

  return (
    <div className="welcome-area">
      <div className="welcome-content">
        <h2>{t("components.config.welcome.title")}</h2>
        <p>{t("components.config.welcome.subtitle")}</p>
      </div>
      <div className="welcome-options">
        <button onClick={() => setStep(4)} className="icon xl">
          <img src={Step2} alt="step 2" />
          <span>{t("components.config.welcome.options.customize")}</span>
        </button>
        <button onClick={() => setStep(2)} className="icon xl">
          <img src={Step1} alt="step 1" />
          <span>{t("components.config.welcome.options.explore")}</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
