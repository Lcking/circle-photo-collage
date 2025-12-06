
import { scan } from "react-scan"; // dev only
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize react-scan for development
if (typeof window !== "undefined") {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

createRoot(document.getElementById("root")!).render(<App />);
