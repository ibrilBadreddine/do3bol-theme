import { useContext } from "react";
import CustomContext from "./custom";

export const useCustom = () => {
  const context = useContext(CustomContext);
  if (!context) {
    throw new Error("useCustom must be used within a CustomProvider");
  }
  return context;
};
