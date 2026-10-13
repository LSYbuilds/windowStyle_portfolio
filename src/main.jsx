import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter basename="/windowStyle_portfolio">
      <App />
    </BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
