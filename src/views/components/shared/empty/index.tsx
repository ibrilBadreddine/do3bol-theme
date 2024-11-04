import "./empty.style.scss";
import Icon from "@components/shared/icons";
import type { EmptyDefinition } from "./empty.type";

const Empty = ({ title, subtitle, icon }: EmptyDefinition) => {
  return (
    <div className="empty-container">
      <div className="empty-box">
        <div className="box-icon">
          <Icon name={icon} />
        </div>
        <div className="box-content">
          <h4 className="box-title">{title}</h4>
          <p className="box-subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Empty;
