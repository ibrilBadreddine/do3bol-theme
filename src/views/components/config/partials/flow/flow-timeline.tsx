import { useState } from "react";
import Icon from "@components/shared/icons";

export default function FlowTimeline() {
  const TASKS = [
    {
      title: "Home > Explore Collections",
      subtitle:
        "Start by browsing through our unique collections to find items that match your style.",
    },
    {
      title: "Collections > Pick a Product",
      subtitle:
        "Dive into the collection and select a product that stands out to you.",
    },
    {
      title: "Product > Customize & Buy Now",
      subtitle:
        "Choose your preferred options, fill in any required details, and click 'Buy Now' to skip directly to checkout.",
    },
    {
      title: "Thank You > Order Complete",
      subtitle:
        "Your order is on its way! Thank you for choosing us—stay tuned for delivery updates.",
    },
  ];

  const [progress, setProgress] = useState<number>(0);
  return (
    <div className="flow-timeline">
      <div className="timeline-progress">
        {[...Array(4)].map((_, i) => (
          <div
            className={`progress-bar ${progress === i ? "active-bar" : ""}`}
            key={i}
          />
        ))}
      </div>
      <div className="i-m-done">
        <h1>3gezt... 😔</h1>
      </div>
      {/* <div className="timeline-core">
        <div className="tasks">
          {TASKS.map((item, i) => (
            <div className="task-box" key={i}>
              <button
                onClick={() => setProgress(i)}
                className={`task-index ${progress >= i ? "active-index" : ""}`}>
                {progress >= i ? <Icon name="check" size={15} /> : i + 1}
              </button>
              <div className="task-info">
                <span>{item.title}</span>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="score">
          <div className="score-box"></div>
          <span className="score-value">1 / 4</span>
        </div>
      </div> */}
    </div>
  );
}
