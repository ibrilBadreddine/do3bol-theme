import "@/assets/style/main.scss";
import { createRoot } from "react-dom/client";
import App from "@/routes/router";
import "@/core/lang/i18n";
import { CustomizationProvider } from "./core/context/custom";

createRoot(document.getElementById("root")!).render(
  <CustomizationProvider>
    <App />
  </CustomizationProvider>
);
