import "./index.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContent from "./components/main-frame/main-frame";
import { useContext, useState } from "react";
import { ThemeContext } from "./contexts/themeInfo";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <BrowserRouter>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </MainContent>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
