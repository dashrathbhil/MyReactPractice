import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import StepperForm from "./components/StepperForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StepperForm />
  </StrictMode>
);
