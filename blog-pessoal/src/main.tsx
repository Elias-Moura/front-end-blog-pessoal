import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ThemeProvider from "./contexts/themeInfo.tsx";
import { AuthProvider } from "./contexts/AuthProvider/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
);
