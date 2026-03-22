import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AmazonUrlProvider } from "./AmazonUrlContext.tsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AmazonUrlProvider>
      <App />
    </AmazonUrlProvider>
  </React.StrictMode>,
);
