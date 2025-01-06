import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "./providers/ThemeProvider";
import { BaseLayout } from "./layouts/BaseLayout";
import { store } from "./appStore";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
