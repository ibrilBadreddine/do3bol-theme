import "./toast.style.scss";
import { useEffect, useState } from "react";
import Icon from "@components/shared/icons";
import type { ToastDefinition } from "./toast.type";

const Toast: React.FC<ToastDefinition> = ({ variant, title, message }) => {
  const [isToastActive, setToast] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setToast(false), 5000);
    return () => clearTimeout(timer);
  }, [isToastActive]);

  const variants = {
    default: {
      icon: null,
      title: null,
      message: "Here’s a general update for you.",
    },
    promise: {
      icon: "spinner",
      title: null,
      message: "Please wait… We’re nearly finished.",
    },
    success: {
      icon: "check_circle",
      title: "Success!",
      message: "Your operation was completed successfully.",
    },
    info: {
      icon: "info",
      title: "FYI",
      message: "Here's some info you might need. Stay informed!",
    },
    warning: {
      icon: "warning",
      title: "Caution!",
      message: "Please check this important information.",
    },
    error: {
      icon: "error",
      title: "Oops! Something Went Wrong",
      message: "There was an error processing your request.",
    },
  };
  return (
    <div className="toast-container">
      <button
        className={isToastActive ? "loading" : "primary"}
        onClick={() => setToast(true)}>
        Preview
      </button>
      <div className={`toast ${variant}`} data-is-active={isToastActive}>
        {variants[variant].icon && (
          <Icon name={variants[variant].icon} size={25} />
        )}
        <div className="toast-content">
          <div className="toast-info">
            <h4>{title ?? variants[variant].title}</h4>
            <p>{message ?? variants[variant].message}</p>
          </div>
          <button onClick={() => setToast(false)} className="toast-action">
            <Icon name="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
