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
import ThemesPage from "./pages/themes";
import PostsPage from "./pages/posts/posts";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import Theme from "./components/theme/theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastrar" element={<Register />} />
            <Route path="/posts" element={<PostsPage/>} />
            <Route path="/temas" element={<ThemesPage/>}/>
            <Route path="/temas/:id_" element={<Theme id={0} titulo={""} descricao={""} />}/>
          </Routes>
        </MainContent>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
