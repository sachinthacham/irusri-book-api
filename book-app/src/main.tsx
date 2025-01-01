import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BookProvider } from "./context/bookContext.tsx";
import { SelectedCardProvider } from "./context/selectedCardContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BookProvider>
    <SelectedCardProvider>
      <App />
    </SelectedCardProvider>
  </BookProvider>
);
