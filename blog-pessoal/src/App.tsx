import "./index.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/main-frame/main-frame";
import { useContext } from "react";
import { ThemeContext } from "./contexts/themeInfo";
import Register from "./pages/register/Register";
import { ProtectedLayout } from "./components/protected-layout";
import ThemesPage from "./pages/themes";
import CreateThemeFormProvider from "./contexts/create-theme-form/themeFormContext";


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <BrowserRouter>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Register />} />
            <Route path="/posts" element={<ProtectedLayout><h1 className="text-white text-2xl">Você está na sessão de posts!</h1></ProtectedLayout>}></Route>
            <Route path="/temas" element={<CreateThemeFormProvider><ThemesPage></ThemesPage></CreateThemeFormProvider>}>
            </Route>
          </Routes>
        </MainContent>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
