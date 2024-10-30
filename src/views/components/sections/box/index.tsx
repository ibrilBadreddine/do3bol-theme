import "./box.style.scss";
import Icon from "@components/shared/icons";

export default function Box() {
  const BOXES = [
    {
      title: "Always in style",
      subtitle: "Looks that stay fresh, season after season.",
      icon: "sparkles",
    },
    {
      title: "Planet friendly",
      subtitle: "Sustainable fabrics made with care.",
      icon: "world",
    },
    {
      title: "Easy returns",
      subtitle: "Simple returns to keep shopping worry-free.",
      icon: "cube",
    },
    {
      title: "Worldwide delivery",
      subtitle: "Bringing style to your door, anywhere.",
      icon: "rocket",
    },
  ];

  return (
    <div className="box-container">
      <div className="section-headlines">
        <h1>Made for everyday life</h1>
        <p>Quality, style, and comfort you can count on.</p>
      </div>
      <div className="boxes-cards">
        {BOXES.map((box, i) => (
          <div key={i} className="box-card">
            <div className="box-icon">
              <Icon name={box.icon} size={25} />
            </div>
            <div className="box-info">
              <span className="box-title">{box.title}</span>
              <p className="box-subtitle">{box.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
