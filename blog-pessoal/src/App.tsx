import './index.css'
import Home from "./pages/home/Home";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className='min-h-screen bg-red-900 flex flex-col'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login'element={<Login />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
