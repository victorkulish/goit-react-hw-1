import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"; // Імпорт стилів
import App from "./app.jsx"; // Виправлений шлях до App.jsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
