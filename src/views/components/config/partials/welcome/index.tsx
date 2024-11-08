import "./style.scss";
import Step1 from "@/assets/images/step-1.png";
import Step2 from "@/assets/images/step-2.png";

export default function Welcome() {
  return (
    <div className="welcome-area">
      <div className="welcome-content">
        <h2>Hey 👋, Want to See It or Make It Yours?</h2>
        <p>Pick your path and let’s get started!</p>
      </div>
      <div className="welcome-options">
        <button className="icon xl">
          <img src={Step1} alt="step 1" />
          <span>Explore</span>
        </button>
        <button className="icon xl">
          <img src={Step2} alt="step 2" />
          <span>Customize</span>
        </button>
      </div>
    </div>
  );
}
