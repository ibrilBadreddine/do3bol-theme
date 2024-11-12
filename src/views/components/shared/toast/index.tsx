import "./toast.style.scss";
import { useEffect } from "react";
import Icon from "@components/shared/icons";
import type { ToastDefinition } from "./toast.type";
import { useTranslation } from "react-i18next";

const Toast: React.FC<ToastDefinition> = ({
  variant,
  show,
  close,
  title,
  message,
}) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const timer = setTimeout(() => close(false), 5000);
    return () => clearTimeout(timer);
  }, [show]);

  const variants = {
    default: {
      icon: null,
      title: null,
      message: t("components.toast.default.message"),
    },
    promise: {
      icon: "spinner",
      title: null,
      message: t("components.toast.promise.message"),
    },
    success: {
      icon: "check_circle",
      title: t("components.toast.success.title"),
      message: t("components.toast.success.message"),
    },
    info: {
      icon: "info",
      title: t("components.toast.info.title"),
      message: t("components.toast.info.message"),
    },
    warning: {
      icon: "warning",
      title: t("components.toast.warning.title"),
      message: t("components.toast.warning.message"),
    },
    error: {
      icon: "error",
      title: t("components.toast.error.title"),
      message: t("components.toast.error.message"),
    },
  };
  return (
    <div className="toast-container">
      <div className={`toast ${variant}`} data-is-active={show}>
        {variants[variant].icon && (
          <Icon name={variants[variant].icon} size={25} />
        )}
        <div className="toast-content">
          <div className="toast-info">
            <h4>{title ?? variants[variant].title}</h4>
            <p>{message ?? variants[variant].message}</p>
          </div>
          <button onClick={() => close(false)} className="toast-action">
            <Icon name="close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
